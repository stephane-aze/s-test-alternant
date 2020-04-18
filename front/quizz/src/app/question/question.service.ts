import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap, switchMap, mergeMap } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private readonly httpClient: HttpClient) { }
 /* public getListQuestion(QuizzId: string): Observable{
    return this.httpClient.get('/api/');
  }*/
}
