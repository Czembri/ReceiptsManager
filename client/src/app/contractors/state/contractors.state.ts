import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, map, tap, throwError } from 'rxjs';
import { BaseState } from 'src/app/_models/base-state.model';
import { CompanyType, ICompanyInfo } from 'src/app/_models/company.model';
import { IReceiptPosition, PaymentInfo } from 'src/app/_models/receipt.model';
import { CompaniesService } from 'src/app/_services/companies.service';
import { GetContractors, GetContractorsFailed, GetContractorsSuccess } from './contractors.actions';

export interface ContractorsStateModel extends BaseState {
  id: number;
  companyName: string;
  companyType: CompanyType;
  address: string;
  city: string;
  postalCode: string;
  nip: string;
}

@State<ContractorsStateModel[]>({
  name: 'Contractors',
  defaults: [{
    id: null,
    companyName: '',
    companyType: null,
    address: '',
    city: '',
    postalCode: '',
    nip: ''
  }]
})

@Injectable()
export class ContractorsState {
  constructor(private companiesService: CompaniesService) {}

  @Action(GetContractors)
  public getContractors(ctx: StateContext<ContractorsStateModel[]>) {
    return this.companiesService.getCompanies().pipe(
      map(companies => {
        return companies.map(dto => <ContractorsStateModel>{
          address: dto.address,
          city: dto.city,
          companyName: dto.companyName,
          companyType: dto.companyType,
          id: dto.id,
          nip: dto.nip,
          postalCode: dto.postalCode
        })
      }),
      tap(companies => ctx.dispatch(new GetContractorsSuccess(companies))),
      catchError(error => {
        ctx.dispatch(new GetContractorsFailed());
        return throwError(() => error)
      }),
    );
  }
}
