import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SuggestionComponent } from './pages/suggestion/suggestion.component';
import { ItemComponent } from './components/item/item.component';
import { ListSuggestionComponent } from './pages/list-suggestion/list-suggestion.component';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuggestionComponent,
    ItemComponent,
    ListSuggestionComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
