import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizzListComponent} from './quizz-list/quizz-list.component';
import {QuestionModule} from '../question/question.module';
import { QuizzRoutingModule } from './quizz-routing.module';
import { QuizzDetailsComponent } from './quizz-details/quizz-details.component';


@NgModule({
  declarations: [QuizzDetailsComponent,QuizzListComponent],
  imports: [
    CommonModule,
    QuizzRoutingModule,
    QuestionModule
  ]
})
export class QuizzModule { }
