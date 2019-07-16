import { Component, OnInit } from '@angular/core';
import { NavTile, NavTilesConfig } from '../utils/nav-tiles/nav-tiles.component';
// import { extractMentions, extractHashtags } from 'twitter-text';

@Component({
	selector: 'app-compose',
	templateUrl: './compose.component.html',
	styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {
	// set up navigation tiles
	navTileConfig:	NavTilesConfig = {}
	navTileList:	NavTile[] = [
		{ title: "Freestyle", path: "freestyle" },
		{ title: "Discuss", path: "discuss", disable:true },
	]

	ngOnInit() {
	}
}