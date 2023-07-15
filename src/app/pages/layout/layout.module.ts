import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../../components/home/home.component';
import { CvComponent } from '../../components/cv/cv.component';
import { CoverLetterComponent } from '../../components/cover-letter/cover-letter.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CvComponent,
    CoverLetterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DialogModule,
    TableModule,
    TagModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    ChartModule
  ]
})
export class LayoutModule { }
