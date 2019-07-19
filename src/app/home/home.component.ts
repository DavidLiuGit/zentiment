import { Component, OnInit } from '@angular/core';
import { NavTilesConfig, NavTile } from '../utils/nav-tiles/nav-tiles.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	dark:		boolean = true;		// enable dark mode by default
	name:		string	= "user";


	// navigation tiles
	tileConfig:	NavTilesConfig = {};
	tileList:	NavTile[] = [
		{ title: "Compose", path: "/compose" },
		{ title: "Browse", path: "/browse" },
		{ title: "Search", path: "/search", disable: true },
		{ title: "Analytics", path: "/analytics", disable:true, hide:true },
	];

	constructor() { }

	ngOnInit() {
	}

}
