import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	dark:	boolean = true;		// enable dark mode by default
	name:	string	= "user";

	constructor() { }

	ngOnInit() {
	}

}
