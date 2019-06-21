import { Component, OnInit } from '@angular/core';
import { NavigationTile } from '../common';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	dark:		boolean = true;		// enable dark mode by default
	name:		string	= "user";


	// navigation tiles
	tileList:	NavigationTile[] = [
		{ title: "Compose", path: "/compose" },
		{ title: "Browse", path: "/browse" },
		{ title: "Search", path: "/search" },
		{ title: "Analytics", path: "/analytics" },
	];

	constructor() { }

	ngOnInit() {
	}

}
