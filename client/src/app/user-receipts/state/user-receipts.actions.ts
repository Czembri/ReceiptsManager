import { UserReceiptsStateModel } from "./user-receipts.state";

export class GetUserReceipts {
  static readonly type = '[RECEIPTS] Get user receipts success';
}

export class GetUserReceiptsSuccess {
  static readonly type = '[RECEIPTS] Get ser receipts failed';
  constructor(public receipts: UserReceiptsStateModel[]) {};
}

export class GetUserReceiptsFailed {
  static readonly type = '[RECEIPTS] Get user receipts success';
}
