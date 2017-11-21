const hikes = [
	{
		id: 0,
		name: "Tricky Trails",
		location: "Lakebed, Utah",
		distance: 10.4,
		rating: 4,
		comments: "This hike was nice and hike-like. Glad I didn't bring a bike."
	},
	{
		id: 1,
		name: "Mondo Mountains",
		location: "Black Hills, South Dakota",
		distance: 20.86,
		rating: 3,
		comments: "Not the best, but would probably do again. Note to self: don't forget the sandwiches next time."
	},
	{
		id: 2,
		name: "Pesky Peaks",
		location: "Bergenhagen, Norway",
		distance: 8.2,
		rating: 5,
		comments: "Short but SO sweet!!"
	},
	{
		id: 3,
		name: "Rad Rivers",
		location: "Moriyama, Japan",
		distance: 12.3,
		rating: 4,
		comments: "Took my time with this one. Great view!"
	},
	{
		id: 4,
		name: "Dangerous Dirt",
		location: "Cactus, Arizona",
		distance: 19.34,
		rating: 2,
		comments: "Too long, too hot. Also that snakebite wasn't very fun."
	}
];

export default class Backend {
	getHikes() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(hikes);
			}, 0);
		});
	}

	updateHike(id, hike) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				hikes.filter(x => x.id === id).forEach(x => {
					h.name = hike.name;
					h.location = hike.location;
					h.distance = hike.distance;
					h.rating = hike.rating;
					h.comments = hike.comments;
				});
				resolve();
			}, 0);
		});
	}
}
