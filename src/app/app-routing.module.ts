import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCvComponent } from './components/create-cv/create-cv.component';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'create-cv', component: CreateCvComponent, },
  { path: 'signin', component: SigninComponent, },
  { path: 'signup', component: SignupComponent, },
  {
    path: '',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule)
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
