// Sidebar menu js

'use strict';

(function () {
	var url = window.location.href;
	var path = url.replace(window.location.protocol + '//' + window.location.host + '/', '');
	var elements = document.querySelectorAll('ul#sidebarnav a');

	elements.forEach(function (element) {
		if (element.href === url || element.href === path) {
			var currentElement = element;
			while (currentElement.parentElement && !currentElement.parentElement.classList.contains('sidebar-nav')) {
				if (currentElement.parentElement.tagName === 'LI' && currentElement.parentElement.querySelector('a')) {
					currentElement.parentElement.querySelector('a').classList.add('active');
					if (!currentElement.parentElement.parentElement.classList.contains('sidebarnav')) {
						currentElement.parentElement.classList.add('active');
					}
				} else if (!currentElement.parentElement.querySelector('a')) {
					currentElement.parentElement.classList.add('active');
				} else if (currentElement.parentElement.tagName === 'UL') {
					currentElement.parentElement.classList.add('in');
				}
				currentElement = currentElement.parentElement;
			}
		}
	});
})();
