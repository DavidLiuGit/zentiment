import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	// navbar configuration
	sidebarHidden: boolean		= true;							// set default value here
	title: string				= "Zentiment";					// title to display in navbar
	svgBaseHref: string			= "assets/icons/bytesize.svg#";	// icons will be loaded from here

	@Input() links: NavbarLink[];


	constructor(
		// private alert: AlertService,
		private router: Router,
	) {}

	ngOnInit() {
	}



	/**
	 * Toggle the visibility (or expansion state) of the navbar
	 * @param hide explicitly provide state to set it to that state
	 */
	toggleSidebar (hide: boolean=undefined) {
		// if hide is explicitly provided, set sidebar to that state
		if (hide != undefined)
			this.sidebarHidden = hide;
		
		// otherwise, toggle it
		else
			this.sidebarHidden = !this.sidebarHidden;
	}



	/**
	 * Handle NavbarLink clicked event. The handler will check properties and act
	 * according to the first defined property:
	 * 1. routerLink: if defined, use Router to navigate
	 * 2. externalLink: if defined, use window.location to navigate
	 * 3. clickCallback: if defined, invoke this function
	 * @param link NavbarLink instance that was clicked
	 */
	linkClickhandler (link: NavbarLink) : void {
		// navigate to routerLink
		if (link.routerLink){
			// use router.navigate if link.routerLink is an array
			if (Array.isArray(link.routerLink))
				this.router.navigate(link.routerLink);
			// otherwise, use router.navigateByUrl
			else
				this.router.navigateByUrl(link.routerLink);
		}
		
		// navigate to an external link
		else if (link.externalLink) 
			(window as any).open(link.externalLink, "_blank");	// open in new tab
		
		// invoke the callback function
		else if (link.clickCallback) 
			link.clickCallback(link);
		
		// if none of the above checks evaluate as true, report this, then do nothing
		else
			console.warn ("This NavbarLink has no action.", link);
	}
}



export interface NavbarLink {
	title:			string;		// display text
	icon:			string;		// id of SVG icon in the designated SVG file

	// by default, when link is clicked, the handler will try to navigate to
	// the links below, starting with routerLink
	routerLink?:	string | Array<string|object>;		// use absolute paths
	externalLink?:	string;

	// if neither link is defined, then the handler will invoke the custom 
	// callback function, defined below
	clickCallback?:	Function;

	// state
	enable?:		boolean;
	show?:			boolean;
}