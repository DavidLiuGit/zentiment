import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// my imports
import { AppComponent } from './app.component';
import { MaltsevRouteReuseStrategy } from './utils/reuse-strategy-2';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';




// app router
const appRoutes = [

	// 404 not found
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' },
]



@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: MaltsevRouteReuseStrategy },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
