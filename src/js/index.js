import {searchFilter} from './modules/searchFilter';
import {tabs} from './modules/tabs';
import {edModal} from './modules/modal';
import {activeMenuItem} from "./modules/verticalMenu";
import {btnMenu} from "./modules/btnMenu";

(()=>{
	if (document.body.classList.contains('home')) {
		// functions here
		tabs();
		edModal();
	}else if (document.body.classList.contains('page2')) {
		searchFilter();
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
	else if (document.body.classList.contains('page4')) {
		// functions here
		btnMenu();
	}
})();
