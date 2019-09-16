import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { TableComponent } from './table/table.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'enquiry',component:EnquiryFormComponent},
  {path:'details',component:TableComponent},
  {path:'update',component:UpdateFormComponent},
  {path:'view',component:ViewStudentComponent},
  {path:'application',component:ApplicationFormComponent},
  {path:'**',redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
