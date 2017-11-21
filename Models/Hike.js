import Backend from 'Services/Backend';

export default class Hike {
	constructor(id, name, location, distance, rating, comments) {
		this.id = id;
		this.name = name;
		this.location = location;
		this.distance = distance;
		this.rating = rating;
		this.comments = comments;
	}

	update(name, location, distance, rating, comments) {
		this.name = name;
		this.location = location;
		this.distance = distance;
		this.rating = rating;
		this.comments = comments;
	}

	save() {
		Backend.updateHike(this.id,
						   this.name,
						   this.location,
						   this.distance,
						   this.rating,
						   this.comments);
	}
}
