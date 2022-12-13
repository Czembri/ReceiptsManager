import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserCompaniesComponent } from './user-companies/user-companies.component';
import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'user-companies', component: UserCompaniesComponent, canActivate: [AuthGuardService] 
  },
  {
    path: '**', component: HomeComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
