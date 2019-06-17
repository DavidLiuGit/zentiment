import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { LogsHttpService } from '../../services/logs-http.service';
import { AlertService } from '../../utils/alert.service';


@Component({
	selector: 'app-freestyle',
	templateUrl: './freestyle.component.html',
	styleUrls: ['./freestyle.component.scss'],
})
export class FreestyleComponent implements OnInit, AfterViewInit {
	@ViewChild("input") textbox	: ElementRef;

	constructor (
		private logsHttp:	LogsHttpService,
		private alert:		AlertService,
	) {}


	ngOnInit() {
	}


	ngAfterViewInit() {
		// focus on textbox automatically
		this.textbox.nativeElement.focus();
	}

	saveBtnClicked () {
		console.log ( this.textbox.nativeElement.value );
	}
} 