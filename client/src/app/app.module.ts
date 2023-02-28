import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { RegisterModule } from './register/register.module';
import { MaterialsModule } from './materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './_services/auth-guard.service';
import { AuthService } from './_services/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { UserReceiptsModule } from './user-receipts/user-receipts.module';
import { BrowserService } from './_services/browser.service';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';
import { WebdatarocksPivotModule } from 'ng-webdatarocks';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    SharedModule,
    UserReceiptsModule,
    RegisterModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    WebdatarocksPivotModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    }),
    // NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  entryComponents: [
    NavComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HttpClient,
    AuthGuardService,
    AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    BrowserService,
  ],
})
export class AppModule { }
