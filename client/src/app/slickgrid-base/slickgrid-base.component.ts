import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Actions, ofActionSuccessful, Select, Store } from '@ngxs/store';
import { AngularGridInstance, Column, GridOption } from 'angular-slickgrid';
import { BehaviorSubject, combineLatest, Observable, Subject, takeUntil } from 'rxjs';
import { defaultGridOptions } from '../shared/constants/slickgrid-defaults';
import { GetBrowserInfo } from './state/browser.actions';
import { BrowserState } from './state/browser.state';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slickgrid-base',
  templateUrl: './slickgrid-base.component.html',
  styleUrls: ['./slickgrid-base.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SlickgridBaseComponent implements OnInit, OnDestroy {
  public gridOptionsRef$ = new BehaviorSubject<GridOption>({});
  public colDefsRef$ = new BehaviorSubject<Column[]>([]);

  @Input()
  public browserName: string;

  @Input()
  public dataSet: Observable<any[]>;

  @Input()
  public translationPrefix: string;

  @Select(BrowserState.browserData)
  public browserData$: Observable<any[]>;

  @Select(BrowserState.browserColumnDefinitions)
  public columnDefinitions$: Observable<Column[]>;

  @Select(BrowserState.browserGridOptions)
  public gridOptions$: Observable<GridOption>;

  private destroyed$ = new Subject<void>();
  angularGrid: AngularGridInstance;
  gridObj;
  rowIndexes = new Array<any>;
  dataViewObj: any;

  constructor(
    private store: Store,
    private actions$: Actions,
    private translate: TranslateService) {}

  ngOnInit(): void {
    defaultGridOptions.i18n = this.translate;
    this.gridOptionsRef$.next(JSON.parse(JSON.stringify(defaultGridOptions)));
    this.store.dispatch(new GetBrowserInfo(this.browserName));
    this.actions$.pipe(
      takeUntil(this.destroyed$),
      ofActionSuccessful(GetBrowserInfo))
      .subscribe(() => {
        combineLatest(this.columnDefinitions$, this.gridOptions$)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(([colDefs, gridOpts]) => {
          this.colDefsRef$.next(JSON.parse(JSON.stringify(colDefs)));
          // if (gridOpts) {
          //   this.gridOptionsRef$.next(JSON.parse(JSON.stringify(gridOpts)));
          // } //prod setup every grid
        })
      })
  }


  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
    this.gridObj = angularGrid.slickGrid;
    this.dataViewObj = angularGrid.dataView;
  }

  onSelectedRowsChanged(e) {
    // user clicked on the 1st column, multiple checkbox selection
    console.log('multiple row checkbox selected', e);
  }

  onCellClicked(e, args) {
    // when clicking on any cell, we will make it the new selected row
    // however, we don't want to interfere with multiple row selection checkbox which is on 1st column cell
    if (args.cell !== 0) {
      this.gridObj.setSelectedRows([args.row]);
    }
  }
}
