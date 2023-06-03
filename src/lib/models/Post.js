export class Post {
	constructor(title = null, description = null, created = new Date(), url = null) {
		this.title = title;
		this.description = description;
		this.created = created;
		this.url = url;
	}
}
