import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap, switchMap, mergeMap } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
import { Quizz } from '../quizz/Quizz';
import { Question } from '../question/Question';
import { QuestionModel } from '../question/QuestionModel';
import { QuestionShape } from './QuestionShape';




@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private readonly httpClient: HttpClient) { }
  public listQuestionsByQuizz(Quizz: Observable<Quizz>): any{
    return Quizz.pipe(map((Quizz: Quizz)=>
    {return Quizz.questions.map<Question>(QuestionShape.NEW)}
    ))
  }
}
