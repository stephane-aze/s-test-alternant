import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [HomeComponent, NavComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [NavComponent],
})
export class MainModule { }
