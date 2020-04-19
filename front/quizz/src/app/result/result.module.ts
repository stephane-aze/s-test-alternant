import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultDetailsComponent } from './result-details/result-details.component';


@NgModule({
  declarations: [ResultDetailsComponent],
  imports: [
    CommonModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
