import { Component, OnInit } from '@angular/core';
import { NavTile, NavTilesConfig } from '../utils/nav-tiles/nav-tiles.component';


@Component({
	selector: 'app-browse',
	templateUrl: './browse.component.html',
	styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
	constructor(){}
	ngOnInit(){}
	
	// navigation tiles config
	navConfig: NavTilesConfig = {};
	navTiles: NavTile[] = [
		{ title: "Entries", path: "entries" },
		{ title: "Tags", path: "tags" },
	]
}