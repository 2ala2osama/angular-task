import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ContactComponentComponent } from './contact/contact-component/contact/contact-component.component';
import { DirctoryComponent } from './contact/contact-component/dirctory/dirctory.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "", component: ProfileComponent
  },
  {
    path: "inovice", component: InvoiceComponent
  },
  {
    path: "company", component: CompanyProfileComponent
  },
  {
    path: "contact", component: DirctoryComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
