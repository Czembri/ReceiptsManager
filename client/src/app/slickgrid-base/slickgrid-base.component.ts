import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Column, GridOption } from 'angular-slickgrid';
import { BehaviorSubject, combineLatest, Observable, Subject, takeUntil } from 'rxjs';
import { GetBrowserInfo } from './state/browser.actions';
import { BrowserState } from './state/browser.state';

@Component({
  selector: 'app-slickgrid-base',
  templateUrl: './slickgrid-base.component.html',
  styleUrls: ['./slickgrid-base.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlickgridBaseComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<void>();

  public gridOptionsRef$ = new BehaviorSubject<GridOption>({});
  public colDefsRef$ = new BehaviorSubject<Column[]>([]);

  @Input()
  public browserName: string;

  @Input()
  public dataSet: Observable<any[]>;

  @Select(BrowserState.browserData)
  public browserData$: Observable<any[]>;

  @Select(BrowserState.browserColumnDefinitions)
  public columnDefinitions$: Observable<Column[]>;

  @Select(BrowserState.browserGridOptions)
  public gridOptions$: Observable<GridOption>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    combineLatest(this.columnDefinitions$, this.gridOptions$)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([colDefs, gridOpts]) => {
        console.warn(colDefs, 'colDefs')
        console.warn(gridOpts, 'gridOpts')
        this.colDefsRef$.next(JSON.parse(JSON.stringify(colDefs)));
        this.gridOptionsRef$.next(JSON.parse(JSON.stringify(gridOpts)));
      })

      this.dataSet.subscribe(x => console.warn(x, 'data'))
    this.store.dispatch(new GetBrowserInfo(this.browserName));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
