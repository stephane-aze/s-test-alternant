import { Component, OnInit } from '@angular/core';
import {AppPage} from '../../AppPage'
import {UserService} from '../../user/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AppPage {
  public pageTitle = 'Accueil';
  constructor(private readonly userService: UserService) { }
  public get user() {

    return this.userService.currentUser;
  }

}
