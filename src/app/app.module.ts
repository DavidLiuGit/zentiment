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
import { ComposeComponent } from './compose/compose.component';
import { FreestyleComponent } from './compose/freestyle/freestyle.component';




// app router
const appRoutes = [
	// home
	{ path: '', component: SplashComponent },
	{ path: 'dashboard', component: HomeComponent },

	// compose
	{ path: 'compose', component: ComposeComponent,	},
	{ path: 'compose/freestyle', component: FreestyleComponent },

	// 404 not found
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404' },
]



@NgModule({
	declarations: [
		AppComponent, NotFoundComponent, SplashComponent, AlertComponent,
		HomeComponent,
		ComposeComponent, FreestyleComponent,
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
