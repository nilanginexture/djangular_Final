import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component'; 
import { AboutusComponent } from './aboutus/aboutus.component';
import { MiddleComponent } from './middle/middle.component';
const  appRoutes: Routes = [
	
	{
		path:"",
		component: MiddleComponent,
	},

	{
		path:"form",
		component: FormComponent,
	},

	{
		path:"about",
		component: AboutusComponent,
	}

]

@NgModule({

	imports: [
		RouterModule.forRoot(
				appRoutes
			)		
	],

	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
