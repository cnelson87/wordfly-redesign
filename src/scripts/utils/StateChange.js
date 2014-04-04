/**
 *  State indicator
 */

var indicator = document.createElement('div');
indicator.id = 'breakpoint-indicator';
document.body.appendChild(indicator);
var $indicator = $(indicator);

function getScreenState() {
	var zindex = $indicator.css('z-index');

	var states = {
		1: 'mobile',
		2: 'tablet',
		3: 'desktop'
	};

	return states.zindex || 'desktop';
}

module.exports = {

	getScreenState: getScreenState

};
