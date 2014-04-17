/*
	TITLE: Menu

	DESCRIPTION: The flyout Menu

	AUTHORS: CN

	DEPENDENCIES:
		- jQuery 1.8+

*/


var Menu = function() {

	var $wrapper = $('#wrapper');
	var $menu = $('#menu');
	var $btnMenu = $('#btn-menu');
	var $closeMenu = $('#close-menu');

	var isMenuActive = false;


	$btnMenu.on('click', function(e) {
		e.preventDefault();
		if (isMenuActive) {
			isMenuActive = false;
			$wrapper.removeClass('menu-active');
			$menu.removeClass('active');
		} else {
			isMenuActive = true;
			$wrapper.addClass('menu-active');
			$menu.addClass('active');
		}
	});


	$closeMenu.on('click', function(e) {
		e.preventDefault();
		isMenuActive = false;
		$wrapper.removeClass('menu-active');
		$menu.removeClass('active');
	});


};


module.exports = Menu;
