import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProbabilidadeComponent } from './probabilidade/probabilidade.component';

@NgModule({
  declarations: [
    AppComponent,
    ProbabilidadeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
