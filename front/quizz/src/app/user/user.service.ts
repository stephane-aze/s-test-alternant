import { Injectable } from '@angular/core';
import{User} from './User';
import { switchMap, map, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authenticatedUser!: User;
  uri = 'http://localhost:4200';
  //private uri = '/api/auth';

  public constructor(private readonly httpClient: HttpClient) {}

  public get currentUser() {
    return this.authenticatedUser;
  }
  public authenticate(username: string, password: string) {
    const body = { username, password };
    return this.httpClient.post(`${this.uri}/api/auth`, body).pipe(
      map(User.NEW),
      tap(user => {
        //localStorage.setItem('user', JSON.stringify(user));
        this.authenticatedUser = user;
      })
      );
  }

}
