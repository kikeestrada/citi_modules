import {searchFilter} from './modules/searchFilter';
import {activeMenuItem} from "./modules/verticalMenu";

(()=>{
	if (document.body.classList.contains('home')) {
		// functions here
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
