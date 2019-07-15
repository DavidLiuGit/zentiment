import { Component, OnInit } from '@angular/core';
import { NavTilesConfig, NavigationTile } from '../utils/nav-tiles/nav-tiles.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	dark:		boolean = true;		// enable dark mode by default
	name:		string	= "user";


	// navigation tiles
	tileConfig:	NavTilesConfig = new NavTilesConfig({});
	tileList:	NavigationTile[] = [
		new NavigationTile({ title: "Compose", path: "/compose" }),
		new NavigationTile({ title: "Browse", path: "/browse" }),
		new NavigationTile({ title: "Search", path: "/search" }),
		new NavigationTile({ title: "Analytics", path: "/analytics" }),
	];

	constructor() { }

	ngOnInit() {
		console.warn (this.tileList);
	}

}
