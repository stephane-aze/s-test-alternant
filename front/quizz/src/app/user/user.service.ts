import { Injectable } from '@angular/core';
import{User} from './User';
import{UserModel} from './UserModel';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { UserAuth } from './UserAuth';
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
    return this.httpClient.post<UserAuth>(`${this.uri}/api/auth`, body).pipe(
      switchMap(authUser=>this.getUser(authUser.userId)),
      map(User.NEW),
      tap(user => {
        //localStorage.setItem('user', JSON.stringify(user));
        this.authenticatedUser = user;
      })
      );
  }
  public getUser(Id: number): Observable<UserModel> {
    return this.httpClient.get(`api/users/${Id}`);
  }
  private patchUser(userId: number, data: UserModel): Observable<UserModel> {
    const URL = `api/users/${userId}`;
    return this.httpClient.patch<UserModel>(URL, data);
  }


}
