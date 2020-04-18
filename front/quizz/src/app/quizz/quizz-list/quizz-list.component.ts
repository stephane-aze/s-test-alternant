import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quizz } from '../Quizz';


@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss']
})
export class QuizzListComponent implements OnInit {
  public houses$!: Observable<Quizz[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
