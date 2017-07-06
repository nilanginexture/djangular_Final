import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/Form.component';
import { DjangoComponent } from './django.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HttpModule } from '@angular/http'

const  appRoutes: Routes = [

	{ path:"form", component: FormComponent },
	{ path:"about", component: AboutusComponent },
	{ path:"rides", component: DjangoComponent },
];

@NgModule({
	imports: [
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
