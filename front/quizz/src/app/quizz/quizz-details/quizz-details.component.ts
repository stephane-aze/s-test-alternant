import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizzService} from '../quizz.service';
import { Quizz} from '../quizz';
import { Question } from '../../question/question';
import { QuestionService } from '../../question/question.service';
import {ActivatedRoute } from '@angular/router';
import { AppPage } from '../../AppPage'

@Component({
  selector: 'app-quizz-details',
  templateUrl: './quizz-details.component.html',
  styleUrls: ['./quizz-details.component.scss']
})
export class QuizzDetailsComponent implements OnInit, AppPage {
  public quiz$!: Observable<Quizz>;
  public pageTitle='';
  public questions$!: Observable<Question[]>;

  constructor(private route: ActivatedRoute,
    private quiz:QuizzService,
    private question:QuestionService
    ) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.pageTitle = 'Quiz N°'+id;

    this.quiz$=this.quiz.getQuiz(id);
    this.questions$=this.question.listQuestionsByQuizz(this.quiz$);
  }
  public chooseAnswer(id: number){
    alert(id);
  }

}
