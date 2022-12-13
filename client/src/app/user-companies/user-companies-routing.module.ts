import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCompanyComponent } from './user-company/user-company.component';

const routes: Routes = [
  {
    path: 'new', component: UserCompanyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserCompaniesRoutingModule { }
