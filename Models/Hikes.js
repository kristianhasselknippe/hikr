import Hike from 'Models/Hike';

export default class Hikes {
	constructor() {
		this.hikes = [];
	}

	replaceAll(data) {
		this.hikes = [];
		data.forEach(x => {
			this.hikes.push(new Hike(x.id,
									 x.name,
									 x.location,
									 x.distance,
									 x.rating,
									 x.comments));
		});
	}
}
