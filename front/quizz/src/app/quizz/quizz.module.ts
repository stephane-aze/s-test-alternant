import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizzListComponent} from './quizz-list/quizz-list.component';

import { QuizzRoutingModule } from './quizz-routing.module';
import { QuizzDetailsComponent } from './quizz-details/quizz-details.component';


@NgModule({
  declarations: [QuizzDetailsComponent],
  imports: [
    CommonModule,
    QuizzRoutingModule
  ]
})
export class QuizzModule { }
