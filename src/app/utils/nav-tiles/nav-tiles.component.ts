import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'nav-tiles',
	templateUrl: './nav-tiles.component.html',
	styleUrls: ['./nav-tiles.component.scss'],
})
export class NavTilesComponent implements OnInit {
	// inputs
	@Input() config:	NavTilesConfig;		// tile container settings
	@Input() tileList:	NavTile[];	// tiles to display

	ngOnInit(){}
}



/**
 * Navitation tile container configuration
 */
export interface NavTilesConfig {

}



export interface NavTile {
	title:		string;
	path:		string;
	text?:		string;		// optional; 
	svgId?:		string;

	// enable & show
	disable?:	boolean;	// if true, do not allow click
	hide?:		boolean;	// if true, do not show
}