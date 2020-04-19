import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import {AppPage} from '../../AppPage';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AppPage, OnInit {
  public pageTitle = 'Login';
  FormLogin: FormGroup;
  @ViewChild('login', { static: false }) loginInput: ElementRef;
  public username$!: Observable<string>;

  constructor(private readonly userService: UserService, private readonly router: Router) { }
  ngOnInit() : void {
    this.FormLogin = new FormGroup({
      'username': new FormControl('',[
        Validators.required,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.pattern(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/gm)
      ]),
    }); // <-- add custom validator at the FormGroup level
  }
  get username() { return this.FormLogin.get('username'); }

  get password() { return this.FormLogin.get('password'); }
  public onSubmit(loginForm): void {
    const { username, password } = loginForm.value;
   this.username$=this.userService.authenticate(username, password).pipe(
      map(() => {
        this.goToQuizz();
        return null;
      }),
      catchError(() => {
        this.resetForm(loginForm);
        return of('Login failed');
      }),
    ); /**/
  }
  public onCancel(): void {
    this.goToHome();
  }
  private goToQuizz(): void {
    this.router.navigateByUrl('/quizz');
  }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  private resetForm(loginForm: NgForm): void {
    loginForm.reset();
    this.loginInput.nativeElement.focus();
  }

}
