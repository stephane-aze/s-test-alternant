import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { from } from 'rxjs';

const routes: Routes = [
{path:'list', pathMatch:'full', component: QuizzListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzRoutingModule { }
