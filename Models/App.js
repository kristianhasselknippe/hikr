import DI from 'FuseJS/DI';
import Hikes from 'Models/Hikes';
import Navigation from 'Services/Navigation';
import Backend from 'Services/Backend';

export default class App {
	constructor() {
		DI(this);
		this.navigation = new Navigation();
		this.backend = new Backend();

		this.hikes = new Hikes();
		this.loadData();
		
		this.navigation.gotoSplashPage();
	}

	loadData() {
		this.backend.getHikes().then(data => {
			this.hikes.replaceAll(data);
		});
	}
}
