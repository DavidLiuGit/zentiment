import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
	selector: 'app-freestyle',
	templateUrl: './freestyle.component.html',
	styleUrls: ['./freestyle.component.scss'],
})
export class FreestyleComponent implements OnInit, AfterViewInit {
	@ViewChild("input") textbox	: ElementRef;

	ngOnInit() {
	}

	ngAfterViewInit() {
		this.textbox.nativeElement.focus();
	}
} 