import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanComponent } from './loan/loan.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CountdownModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
