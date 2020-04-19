import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap, switchMap, mergeMap } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
import { QuizzModel } from './QuizzModel';
import { QuizzShape } from './QuizzShape';
import { Quizz } from './Quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private readonly resourcePath = '/api/quizz';
  constructor(private readonly http: HttpClient) { }

  public getListQuizz():Observable<Quizz[]>{
    return this.http.get<QuizzShape[]>(this.resourcePath).pipe(
      map(Quizz.NEW_BUNCH),
    );
  }
  public getQuiz(id:number):Observable<QuizzShape>{
    return this.http.get<QuizzModel>(`${this.resourcePath}/${id}`).pipe(
      map(QuizzShape.NEW)
    );
  }
}
