import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import {  HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeoplesModule } from './peoples/peoples.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PeoplesService } from './peoples/peoples.service';
import { PeoplesRegisterComponent } from './peoples/peoples-register/peoples-register.component';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    PeoplesModule,
    routing
  ],
  providers: [
    PeoplesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
