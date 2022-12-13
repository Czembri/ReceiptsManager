import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MaterialsModule } from "../materials.module";
import { SubNavigationModule } from "../sub-navigation/sub-navigation.module";
import { UserCompaniesRoutingModule } from "./user-companies-routing.module";
import { UserCompaniesComponent } from "./user-companies.component";
import { UserCompanyComponent } from "./user-company/user-company.component";


@NgModule({
  declarations: [
    UserCompaniesComponent,
    UserCompanyComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    SubNavigationModule,
    UserCompaniesRoutingModule,
    MaterialsModule,
  ],
  entryComponents: [
    UserCompaniesComponent,
  ]
})
export class UserCompaniesModule { }