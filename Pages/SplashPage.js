import DI from 'FuseJS/DI';

export default class SplashPage {
	constructor(navigation = DI("navigation")) {
		this.navigation = navigation;
	}
	
	goToHomePage() {
		this.navigation.gotoHomePage();
	}
}
