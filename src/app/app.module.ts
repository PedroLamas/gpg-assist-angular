import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { GpgAssistComponent }  from './app.gpg-assist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GpgAssistComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
