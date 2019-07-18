// this service inherits HttpService

import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class LogsHttpService extends HttpService {

	// properties & consts
	path:	string = "/logs";		// relative API path; appended to base_api_url


	constructor (
		protected http: HttpClient,
	) {
		super(http);
	}


	/**
	 * newLog
	 */
	public newLog() {
		
	}
}
