//  This file is part of the jQuery PopupBox Plugin.
//
//    The jQuery PopupBox Plugin is free software: you can redistribute it
//    and/or modify it under the terms of the GNU General Public License as published 
//    by the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.

//    The jQuery PopupBox Plugin is distributed in the hope that it will
//    be useful, but WITHOUT ANY WARRANTY; without even the implied warranty 
//    of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License along with 
//    the jQuery PopupBox Plugin.  If not, see <http://www.gnu.org/licenses/>.

$.fn.popBox = function(options){
	event.preventDefault();
	event.stopPropagation();
	
	var clickEl	= $(event['currentTarget']);
	var box		= $(this);
	var cover	= null;
	
	if(typeof options === "undefined" || options === null)
		options = {cover: false, effect: 'slideToggle'};
	
	var screenW = $(window).width();
	var screenH = $(window).height();
	var boxW 	= box.outerWidth();
	var boxH 	= box.outerHeight();
	
	var computedX = (screenW - boxW) / 2;
	var computedY = (screenH - boxH) / 2;
			
	box.css({'left': computedX+'px', 'top': computedY+'px', 'position': 'fixed', 'z-index':1000});
	
	
	// Make cover
	if(options.cover == true){			
		$("<style>").text("#page-cover { position: fixed;top: 0px; left: 0px; height: 100%; width: 100%; background-color: #000; opacity: 0.4; filter: alpha(opacity=40); z-index: 900; }").appendTo("head");
		
		cover = $("<div id='page-cover'>").appendTo("body");
	}
	
	(effect = function(hide){
		switch(options.effect){
			case "slideToggle":
				if(!hide) box.slideToggle();
				else box.slideUp();
				break;
			case "toggle":
				if(!hide) box.toggle();
				else box.hide();
				break;
			default:
				if(!hide)box.slideToggle();
				else box.slideUp();
		}
	})(false);
	
	// close
	$('html').click(function(){
		effect(true);
		if(!(typeof cover === "undefined" || cover === null))
			cover.remove();
		
	});
	$(box, clickEl).click(function(e){
		e.stopPropagation();
	});
}