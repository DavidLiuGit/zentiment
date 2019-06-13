/**
 * This file contains commonly reused classes and variables
 */


/**
 * Instances of this class defines navigation tiles
 */
export class NavigationTile {
	title:	string;		// tile title
	path:	string;		// redirect path
	text:	string;		// description (optional)

	constructor(title, path, text?) {
		this.title = title;
		this.path = path;
		this.text = text;
	}
}