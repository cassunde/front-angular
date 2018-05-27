import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesComponent } from './peoples.component';
import { PeoplesRegisterComponent } from './peoples-register/peoples-register.component';
import { PeoplesListComponent } from './peoples-list/peoples-list.component';
import { PeoplesService } from './peoples.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PeoplesComponent,
    PeoplesRegisterComponent,
    PeoplesListComponent
  ],
  exports: [
    PeoplesComponent
  ]
})
export class PeoplesModule { }
