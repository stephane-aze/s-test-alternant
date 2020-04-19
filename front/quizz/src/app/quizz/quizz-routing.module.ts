import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { QuizzDetailsComponent } from './quizz-details/quizz-details.component';

import { from } from 'rxjs';

const routes: Routes = [
{path:'', pathMatch:'full', component: QuizzListComponent},
{path: ':id', component: QuizzDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzRoutingModule { }
