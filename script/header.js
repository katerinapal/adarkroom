import "..\\lib\\jquery.event.swipe.js";
import jqueryeventswipe_$ from "..\\lib\\jquery.event.swipe.js";
import "..\\lib\\jquery.event.move.js";
import jqueryeventmove_$ from "..\\lib\\jquery.event.move.js";
import "..\\lib\\jquery.color-2.1.2.min.js";
import jquerycolor212min_$ from "..\\lib\\jquery.color-2.1.2.min.js";
import { Engine } from ".\\engine.js";
/**
 * Module that takes care of header buttons
 */
var Header = {
	
	init: function(options) {
		this.options = $.extend(
			this.options,
			options
		);
	},
	
	options: {}, // Nothing for now
	
	canTravel: function() {
		return $('div#header div.headerButton').length > 1;
	},
	
	addLocation: function(text, id, module) {
		return $('<div>').attr('id', "location_" + id)
			.addClass('headerButton')
			.text(text).click(function() {
				if(Header.canTravel()) {
					Engine.travelTo(module);
				}
			}).appendTo($('div#header'));
	}
};