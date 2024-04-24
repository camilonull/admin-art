import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SuggestionComponent } from './pages/suggestion/suggestion.component';
import { ListSuggestionComponent } from './pages/list-suggestion/list-suggestion.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'suggestion',component:SuggestionComponent},
  {path:'co-su',component:ListSuggestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
