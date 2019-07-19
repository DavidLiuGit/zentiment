// this service inherits HttpService

import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class LogsHttpService extends HttpService {

	// properties & consts
	path:	string = "logs";		// relative API path; appended to base_api_url
	user:	string = "allah";


	constructor (
		protected http: HttpClient,
	) {
		super(http);
	}


	/**
	 * Save a new log
	 */
	public newLog (entry: string) : Observable<Object> {
		let url: string = `${this.api_url}/${this.path}/${this.user}/new`;
		return this.http.post(url, {entry: entry});
	}
}
