import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { NavigationItem } from './models/nav-item.model';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {

  public navItemsList = new Array<NavigationItem>;
  private destroyed$ = new Subject<void>();

  constructor(public accountService: AccountService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.getTranslation(this.translate.currentLang)
      .pipe(takeUntil(this.destroyed$)).subscribe(translation => {
      this.navItemsList.push(<NavigationItem>{
        class: 'nav-link',
        url: '/user-receipts',
        translation: translation['USER_RECEIPTS']
      });
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  logout() {
    this.accountService.logout();
  }
}
