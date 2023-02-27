import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ISubNavigationOptions } from '../sub-navigation/sub-nav.model';
import { ReceiptsService } from '../_services/receipts.service';
import { GetUserReceipts } from './state/user-receipts.actions';
import { UserReceiptsState, UserReceiptsStateModel } from './state/user-receipts.state';

@Component({
  selector: 'app-user-receipts',
  templateUrl: './user-receipts.component.html',
  styleUrls: ['./user-receipts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserReceiptsComponent implements OnInit {

  @Select(UserReceiptsState.userReceipts)
  public userReceipts$: Observable<UserReceiptsStateModel[]>;
  subNavigationOptions = new Array<ISubNavigationOptions>();

  constructor(private store: Store) {
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
    this.store.dispatch(new GetUserReceipts());
  }

}
