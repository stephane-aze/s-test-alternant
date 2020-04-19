import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { AppPage } from '../../AppPage'

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.scss']
})
export class ResultDetailsComponent implements OnInit {
  public pageTitle='Résultat';

  constructor() { }

  ngOnInit(): void {
  }

}
