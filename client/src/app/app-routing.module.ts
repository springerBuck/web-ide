import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GitHubLoginComponent} from "./components/git-hub-login/git-hub-login.component";


const routes: Routes = [
	{path:'github/result', component: GitHubLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
