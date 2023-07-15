import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { LayoutComponent } from './layout.component';
import { CvComponent } from '../../components/cv/cv.component';
import { CoverLetterComponent } from '../../components/cover-letter/cover-letter.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
const routes: Routes = [

{ 
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '', component: HomeComponent
    },
    {
      path: 'cvs', component: CvComponent
    },
    {
      path: 'cover-letter', component: CoverLetterComponent
    },
    {
      path: 'statistique', component: DashboardComponent
    },
]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
