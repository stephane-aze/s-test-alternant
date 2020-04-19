import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultDetailsComponent} from './result-details/result-details.component';

const routes: Routes = [{path:'result', component:ResultDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
