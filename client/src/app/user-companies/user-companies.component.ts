import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ISubNavigationOptions } from '../sub-navigation/sub-nav.model';
import { AccountService } from '../_services/account.service';
import { CompaniesService } from '../_services/companies.service';
import { IUserCompanyInfo } from './models/company.model';

@Component({
  selector: 'app-user-companies',
  templateUrl: './user-companies.component.html',
  styleUrls: ['./user-companies.component.css']
})
export class UserCompaniesComponent implements OnInit {
  displayedColumns: string[] = ['companyName', 'companyType', 'address', 'city', 'postalCode', 'nip', 'position'];
  dataSource = new MatTableDataSource<IUserCompanyInfo>();
  subNavigationOptions = new Array<ISubNavigationOptions>();

  constructor(private companiesService: CompaniesService, private accountService: AccountService) {
    this.subNavigationOptions.push({
      text: 'Add new',
      customLinkCssClasses: 'btn btn-success me-2',
      url: '/user-companies/user-company',
    },
    {
      text: 'Change selected',
      customLinkCssClasses: 'btn btn-success me-2',
      url: '',
    },
    {
      text: 'Delete',
      customLinkCssClasses: 'btn btn-danger me-2',
      url: '',
    },
    {
      text: 'Open view in popup',
      customLinkCssClasses: 'btn btn-warning me-2',
      url: '',
    });
  }

  ngOnInit(): void {
    this.companiesService.getCompanies(this.accountService.getCurrentUser()).subscribe(data => this.dataSource.data = data);
  }

}
