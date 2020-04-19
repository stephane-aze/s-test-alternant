import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',pathMatch:'full', loadChildren:()=>import('./main/main.module').then(m=>m.MainModule) },
  {path:'user', loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'quizz', loadChildren:()=>import('./quizz/quizz.module').then(m=>m.QuizzModule), canActivate: [AuthGuard]},
  {path:'result', loadChildren:()=>import('./result/result.module').then(m=>m.ResultModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
