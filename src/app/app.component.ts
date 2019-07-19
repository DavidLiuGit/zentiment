import { Component } from '@angular/core';
import { NavbarLink } from './utils/navbar/navbar.component';
import { AlertService } from './utils/alert.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Zentiment';

	constructor (
		public alert: AlertService
	){}

	// navbar config
	navbarLinks: NavbarLink[] = [
		{ title: "Dashboard", routerLink: "/dashboard", icon: "i-home" },
		{ title: "Compose", routerLink: "/compose", icon: "i-compose"},
		{ title: "Browse", routerLink: "/browse", icon: "i-folder-open" },
		// { title: "Ext", icon: '', externalLink: "http://google.com" },
		{ 
			title: "???", icon: 'i-warning', 
			clickCallback: () => this.fuckMyShitUp()
		},

	]



	/**
	 * Inject Ooer CSS
	 */
	fuckMyShitUp(){
		console.log ("Pls to halp!");
		this.alert.error("Pls to halp!", true);

		// inject Ooer CSS
		var cssId = 'myCss';
		if (!document.getElementById(cssId))
		{
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.id   = cssId;
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = 'assets/kek/ooo3.css';
			link.media = 'all';
			head.appendChild(link);
		}
	}
}
