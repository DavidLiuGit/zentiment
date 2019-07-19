import { Injectable } from '@angular/core';
// import { environment } from '../environments/environment';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	api_url:	string = environment.api_url;

	constructor(
		protected http: HttpClient,
	) {
		// check connection to server
		this.ping();
	}


	/**
	 * Ping the ReST API server
	 */
	public ping() {
		let path: string = "/ping";
		this.http.get (`${this.api_url}${path}`).subscribe(
			data => console.log(data),
			err => console.warn("running custom error handler"),
		);
	}
}
