import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/Form.component';
import { HeaderComponent } from './header/header.component';
import { DjangoComponent } from './django.component';
import { AppRoutingModule } from './routing';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent }  from './Component';


@NgModule({
  imports: [
  		BrowserModule,
      AppRoutingModule
  		],
  declarations: [
  		AppComponent,
	    FormComponent,
	    HeaderComponent,
      AboutusComponent,
      DjangoComponent
  		],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
