import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, map, switchMap, tap, throwError } from 'rxjs';
import { BaseState } from 'src/app/_models/base-state.model';
import { CompanyType, ICompanyInfo } from 'src/app/_models/company.model';
import { IReceiptPosition, PaymentInfo } from 'src/app/_models/receipt.model';
import { ReceiptsService } from 'src/app/_services/receipts.service';
import { GetUserReceipts, GetUserReceiptsFailed, GetUserReceiptsSuccess } from './user-receipts.actions';

export interface UserReceiptsStateModel extends BaseState {
  id: number;
  receiptNumber: string;
  shop: ICompanyInfo;
  total: string;
  positions: IReceiptPosition[];
  positionsCount: number;
  payment: PaymentInfo;
  created: Date;
}

@State<UserReceiptsStateModel[]>({
  name: 'UserReceipts',
  defaults: [{
    id: null,
    created: null,
    payment: null,
    positions: [],
    positionsCount: 0,
    receiptNumber: '',
    shop: null,
    total: ''
  }]
})

@Injectable()
export class UserReceiptsState {
  constructor(private receiptsServce: ReceiptsService) {}

  @Selector()
  public static userReceipts(state: UserReceiptsStateModel[]) {
    return state.map(dto => ({
      id: dto.id,
      created: dto.created,
      paymentType: dto.payment.paymentType,
      positionsCount: dto.positions.length,
      positions: dto.positions,
      receiptNumber: dto.receiptNumber,
      shopName: dto.shop.companyName,
      total: dto.total,
    }))
  }

  @Selector()
  public static userReceiptsState(state: UserReceiptsStateModel[]) {
    return state;
  }

  @Action(GetUserReceipts)
  public getUserReceipts(ctx: StateContext<UserReceiptsStateModel[]>) {
    return this.receiptsServce.getReceipts().pipe(
      map(receipts => {
        return receipts.map(dto => <UserReceiptsStateModel>{
          id: dto.id,
          created: dto.created,
          payment: dto.paymentInfo,
          positionsCount: dto.positions.length,
          positions: dto.positions,
          receiptNumber: dto.receiptNumber,
          shop: dto.shop,
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
