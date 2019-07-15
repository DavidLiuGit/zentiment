import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'nav-tiles',
	templateUrl: './nav-tiles.component.html',
	styleUrls: ['./nav-tiles.component.scss'],
})
export class NavTilesComponent implements OnInit {
	// inputs
	@Input() config:	NavTilesConfig;		// tile container settings
	@Input() tileList:	NavigationTile[];	// tiles to display

	ngOnInit(){}
}



/**
 * Navitation tile container configuration
 */
export class NavTilesConfig {

	constructor ( config: NavTilesConfig ) {
		// read in configuration
		for (let p in config)
			this[p] = config[p];
	}
}



/**
 * Instances of this class defines navigation tiles
 */
export class NavigationTile {
	title:	string;		// tile title
	path:	string;		// redirect path
	text?:	string;		// description (optional)
	svgId?:	string;		// optionally provide svg ID to display

	// enable & show
	enable?:boolean = true;
	show?:boolean	= true;

	constructor ( config: NavigationTile ) {
		// read in configuration
		for (let p in config)
			this[p] = config[p];
	}
}