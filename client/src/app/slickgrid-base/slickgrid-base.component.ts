import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Column, GridOption } from 'angular-slickgrid';
import { Observable, Subject } from 'rxjs';
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

  @Input()
  public browserName: string;

  @Input()
  public dataSet: Observable<any[]>;

  @Select(BrowserState.browserData)
  public browserData$: Observable<any[]>;

  @Select(BrowserState.browserColumnDefinitions)
  public columnDefinitions$: Observable<Column[]>;

  @Select(BrowserState.browserGridOptions)
  public gridOptions$: Observable<GridOption[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetBrowserInfo(this.browserName));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
