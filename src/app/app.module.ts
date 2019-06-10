import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// my imports
import { AppComponent } from './app.component';
import { MaltsevRouteReuseStrategy } from './utils/reuse-strategy-2';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { SplashComponent } from './splash.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './utils/alert/alert.component';




// app router
const appRoutes = [
	// home
	{ path: '', component: SplashComponent },
	{ path: 'dashboard', component: HomeComponent },

	// 404 not found
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' },
]



@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		SplashComponent,
		HomeComponent,
		AlertComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot( appRoutes ),
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: MaltsevRouteReuseStrategy },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
