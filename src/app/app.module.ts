import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProbabilidadeComponent } from './probabilidade/probabilidade.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CondicionalComponent } from './condicional/condicional.component';

@NgModule({
  declarations: [
    AppComponent,
    ProbabilidadeComponent,
    CondicionalComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  NgbModule,
  HttpClientModule  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
