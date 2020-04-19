import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quizz } from '../Quizz';
import {QuizzService} from '../quizz.service';
import {UserService} from '../../user/user.service';
import { AppPage } from '../../AppPage';
import { Router } from '@angular/router';

@Component({
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss']
})
export class QuizzListComponent implements OnInit,AppPage {
  public quizz$!: Observable<Quizz[]>;
  public pageTitle = 'Quizz';

  constructor(
    private readonly quizzService: QuizzService,
    private readonly userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.quizz$=this.listQuizz();
  }
  public get user() {
    console.log(this.userService.currentUser);
    return this.userService.currentUser;
  }

  private listQuizz(): Observable<Quizz[]>{
    return this.quizzService.getListQuizz();
  }
  public openDetails(QuizId:number){
    this.router.navigateByUrl("/quizz/"+QuizId);
  }

}
