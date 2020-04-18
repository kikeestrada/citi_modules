(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _searchFilter = require('./modules/searchFilter');

var _tabs = require('./modules/tabs');

var _modal = require('./modules/modal');

var _verticalMenu = require('./modules/verticalMenu');

var _btnMenu = require('./modules/btnMenu');

(function () {
	if (document.body.classList.contains('home')) {
		// functions here
		(0, _tabs.tabs)();
		(0, _modal.edModal)();
	} else if (document.body.classList.contains('page2')) {
		(0, _searchFilter.searchFilter)();
		// functions here
	} else if (document.body.classList.contains('page3')) {
		// functions here
	} else if (document.body.classList.contains('page4')) {
		// functions here
		(0, _btnMenu.btnMenu)();
	}
})();

},{"./modules/btnMenu":2,"./modules/modal":4,"./modules/searchFilter":5,"./modules/tabs":6,"./modules/verticalMenu":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var btnMenu = exports.btnMenu = function btnMenu() {
	var fnBtnMenu = function fnBtnMenu() {
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.vertical-menu-toggle'), function (el) {
				el.classList.toggle('active');
			});
		});
	};
	fnBtnMenu();
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Crear elementos con atributos e hijo
var createCustomElement = exports.createCustomElement = function createCustomElement(element, attributes, children) {
  var customElement = document.createElement(element);
  if (children !== undefined) children.forEach(function (el) {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });
  addAttributes(customElement, attributes);
  return customElement;
};

// Añadir un objeto de atributos a un elemento
var addAttributes = exports.addAttributes = function addAttributes(element, attrObj) {
  for (var attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};

// Envolver un elemento con otro
var wrap = exports.wrap = function wrap(selector, wrapElementType, attributesObj) {
  var element = getElement(selector),
      nextSibling = element.nextElementSibling,
      parent = element.parentElement,
      wrapElement = createCustomElement(wrapElementType, attributesObj, element);

  nextSibling ? parent.insertBefore(wrapElement, nextSibling) : parent.appendChild(wrapElement);

  return wrapElement;
};

// Retornar un elemento del DOM (revisar)
var getElement = exports.getElement = function getElement(elementOrSelector) {
  var e = void 0,
      g = void 0;
  if (elementOrSelector.nodeType === 1) {
    e = elementOrSelector;
  } else {
    g = document.querySelector(elementOrSelector);
    if (document.querySelector(g)) {
      e = document.querySelector(g);
    } else {
      e = document.createElement('div');
      console.error('Function getElement() requires a DOM element\n    or a valid selector. It has been created a placeholder element to avoid\n    execution errors, please fixed as soon as posible');
    }
  }
  return e;
};

// Media queries
var mediaQuery = function mediaQuery(breakpoint, cb) {
  var isChangeSize = function isChangeSize(mql) {
    return cb(mql.matches);
  };
  breakpoint.addListener(isChangeSize);
  isChangeSize(breakpoint);
};

// From (EDgrid equivalent)
// cb receive a boolean argument from mediaQuery() function
var from = function from(breakpoint, cb) {
  var bp = window.matchMedia('(min-width: ' + breakpoint + ')');
  mediaQuery(bp, cb);
};

// To (EDgrid equivalent)
// cb receive a boolean argument from mediaQuery() function
var to = function to(breakpoint, cb) {
  var bp = window.matchMedia('(max-width: ' + breakpoint + ')');
  mediaQuery(bp, cb);
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.edModal = undefined;

var _helpers = require('./helpers');

var edModal = exports.edModal = function edModal() {
	// Imprimir modal
	var printModal = function printModal(content) {
		// crear contenedor interno
		var modalContentEl = (0, _helpers.createCustomElement)('div', {
			id: 'ed-modal-content',
			class: 'ed-modal-content'
		}, [content]),


		// crear contenedor principal
		modalContainerEl = (0, _helpers.createCustomElement)('div', {
			id: 'ed-modal-container',
			class: 'ed-modal-container'
		}, [modalContentEl]);

		// Imprimir el modal
		document.body.appendChild(modalContainerEl);

		// Remover el modal
		var removeModal = function removeModal() {
			return document.body.removeChild(modalContainerEl);
		};

		modalContainerEl.addEventListener('click', function (e) {
			if (e.target === modalContainerEl) removeModal();
		});
	};

	var saludo = '<h1>This is my Modal Component</h1>';
	document.getElementById('show-modal').addEventListener('click', function () {
		printModal(saludo);
	});
};

},{"./helpers":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var searchFilter = exports.searchFilter = function searchFilter() {
	// get the input data
	var fnFilter = function fnFilter(inputElement, selector, selectorContainer) {
		inputElement.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') e.target.value = '';
			fnCompareElements(e.target.value.toUpperCase(), selector, selectorContainer);
		});
	};
	var fnCompareElements = function fnCompareElements(filterText, selector, selectorContainer) {
		var searchElements = document.querySelectorAll(selector);
		var searchContainers = document.querySelectorAll(selectorContainer);
		searchElements.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
		searchContainers.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
	};
	fnFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var tabs = exports.tabs = function tabs() {
	var container = document.querySelector('.edui-tabs'),
	    tabsContainer = container.querySelector('.tabs'),
	    panelsContainer = container.querySelector('.panels'),
	    tabs = [].concat(_toConsumableArray(tabsContainer.querySelectorAll('.tab'))),
	    panels = [].concat(_toConsumableArray(panelsContainer.querySelectorAll('.panel')));

	tabs[0].classList.add('active');
	panels[0].classList.add('active');

	tabsContainer.addEventListener('click', function (e) {
		var t = e.target,
		    i = tabs.indexOf(t);
		if (e.target.classList.contains('tab')) {
			tabs.map(function (tab) {
				return tab.classList.remove('active');
			});
			panels.map(function (panel) {
				return panel.classList.remove('active');
			});
			t.classList.add('active');
			panels[i].classList.add('active');
		}
	});
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var menu = exports.menu = function menu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
      if (navId === 'main-menu') document.body.classList.toggle('main-menu-visible');
    });
  }
};

menu('vertical-menu-toggle', 'vertical-menu');

var activeMenuItem = function activeMenuItem(containerId) {
  var links = [].concat(_toConsumableArray(document.querySelectorAll('#' + containerId + ' a')));
  var curentUrl = document.location.href;
  links.map(function (link) {
    if (link.href === curentUrl) {
      link.classList.add('active');
    }
  });
};

activeMenuItem('vertical-menu');

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
