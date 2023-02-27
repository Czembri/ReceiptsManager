import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, map, switchMap, tap, throwError } from 'rxjs';
import { BaseState } from 'src/app/_models/base-state.model';
import { ReceiptsService } from 'src/app/_services/receipts.service';
import { GetUserReceipts, GetUserReceiptsFailed, GetUserReceiptsSuccess } from './user-receipts.actions';

export interface UserReceiptsStateModel extends BaseState {
  id: number;
  receiptNumber: string;
  shopName: string;
  total: string;
  positionsCount: number;
  paymentType: string;
  created: Date;
}

@State<UserReceiptsStateModel[]>({
  name: 'UserReceipts',
  defaults: [{
    id: null,
    created: null,
    paymentType: '',
    positionsCount: 0,
    receiptNumber: '',
    shopName: '',
    total: ''
  }]
})

@Injectable()
export class UserReceiptsState {
  constructor(private receiptsServce: ReceiptsService) {}

  @Selector()
  public static userReceipts(state: UserReceiptsStateModel[]) {
    return state;
  }

  @Action(GetUserReceipts)
  public getUserReceipts(ctx: StateContext<UserReceiptsStateModel[]>) {
    return this.receiptsServce.getReceipts().pipe(
      map(receipts => {
        return receipts.map(dto => <UserReceiptsStateModel>{
          id: dto.id,
          created: dto.created,
          paymentType: dto.paymentInfo.paymentType.toString(),
          positionsCount: dto.positions.length,
          receiptNumber: dto.receiptNumber,
          shopName: dto.shop.companyName,
          total: dto.total
        })
      }),
      tap(receipts => ctx.dispatch(new GetUserReceiptsSuccess(receipts))),
      catchError(error => {
        ctx.dispatch(new GetUserReceiptsFailed());
        return throwError(() => error)
      }),
    );
  }

  @Action(GetUserReceiptsSuccess)
  getUserReceiptsSuccess(ctx: StateContext<UserReceiptsStateModel[]>, { receipts }: GetUserReceiptsSuccess) {
    ctx.setState(receipts);
  }
}
