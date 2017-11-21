import DI from 'FuseJS/DI';

export default class HomePage {
	constructor(navigation = DI("navigation")) {
		this.navigation = navigation;
	}
	
	goToHike(arg) {
		this.navigation.pushEditHikePage(arg.data);
	}	
}
