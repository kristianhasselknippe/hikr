import DI from 'FuseJS/DI';

export default class EditHikePage {
	constructor(hike, navigation = DI("navigation")) {
		this.hike = Object.assign({},hike);
		this.actualHike = hike;
		this.navigation = navigation;
	}

	cancel() {
		this.navigation.goBack();
	}

	save() {
		this.actualHike.update(
			this.hike.name,
			this.hike.location,
			this.hike.distance,
			this.hike.rating,
			this.hike.comments
		);
		this.navigation.goBack();
	}
}
