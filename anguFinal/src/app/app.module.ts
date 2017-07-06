import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing';
import { FormComponent } from './form/form.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MiddleComponent } from './middle/middle.component';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    AboutusComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
