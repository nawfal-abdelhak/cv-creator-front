import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPrintModule} from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCvComponent } from './components/create-cv/create-cv.component';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DialogModule } from 'primeng/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateCvComponent,
    SigninComponent,
    SignupComponent,


  ],
  imports: [
    FormsModule,
    NgxPrintModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ChipModule,
    InputTextareaModule,
    CalendarModule,
    ColorPickerModule,
    ProgressBarModule,
    SliderModule,
    SliderModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
