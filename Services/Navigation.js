import SplashPage from 'Pages/SplashPage';
import HomePage from 'Pages/HomePage';
import EditHikePage from 'Pages/EditHikePage';

export default class Navigation {
	constructor() {
		this.pages = [];
	}

	gotoSplashPage() {
		this.pages = [new SplashPage()];
	}

	gotoHomePage() {
		this.pages = [new HomePage()];
	}

	pushEditHikePage(hike) {
		this.pages.push(new EditHikePage(hike));
	}

	goBack() {
		this.pages.pop();
	}
}
