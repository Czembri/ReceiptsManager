import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ISubNavigationOptions } from '../sub-navigation/sub-nav.model';
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

  public subNavigationOptions = new Array<ISubNavigationOptions>();

  constructor(private store: Store) {
    this.subNavigationOptions.push({
      text: 'ADD',
      customLinkCssClasses: 'btn btn-success me-2',
      url: '/user-receipts/new',
    },
    {
      text: 'EDIT',
      customLinkCssClasses: 'btn btn-success me-2',
      url: '',
    },
    {
      text: 'DELETE',
      customLinkCssClasses: 'btn btn-danger me-2',
      url: '',
    },
    {
      text: 'OPEN_IN_POPUP',
      customLinkCssClasses: 'btn btn-warning me-2',
      url: '',
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUserReceipts());
  }

}
