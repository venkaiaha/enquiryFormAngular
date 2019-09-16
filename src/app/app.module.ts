import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatCardModule,MatSidenavModule,
   MatListModule, MatButtonModule, MatNativeDateModule } from  '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {  MatInputModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { TableEditPopComponent } from './table-edit-pop/table-edit-pop.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    TableComponent,
    ApplicationFormComponent,
    TableEditPopComponent,
    PieChartComponent,
    UpdateFormComponent,
    DeleteRecordComponent,
    ViewStudentComponent,
    HomeComponent,
    
  ],
  imports: [
    ChartsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,

    MatStepperModule,
    MatGridListModule,
    MatTabsModule,
    MatTreeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
