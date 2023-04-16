import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCvComponent } from './components/create-cv/create-cv.component';

const routes: Routes = [
  { path: '', component: CreateCvComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
