import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { UserCardComponent } from './user-card/user-card.component';

import { SecondsToTImeFormat } from './pipes/secondToTimeFormat.pipe';

import { RedBorder } from './directives/RedBorder.directive';

import { ArticlesService } from './services/articles.services';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullScreenComponent,
    UserCardComponent,
    SecondsToTImeFormat,
    RedBorder,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
