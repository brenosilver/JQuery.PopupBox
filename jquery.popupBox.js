//    Created by Breno D. Silva
//    Version 0.15 / 12-25-2014

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

(function($){
	
	$.fn.popupBox = function(options){
		event.preventDefault();
		event.stopPropagation();
		
		var clickEl		= $(event['currentTarget']);
		var box			= $(this);
		var cover		= null;
		var settings	= null;
		var isHidden	= false;
		
		this.defaults = {
			cover: false,
			effect: 'slideToggle',
			duration: 400,
			coverStyle: {
				color: '#000',
				opacity: 0.4,
				zIndex: 900
			},
			boxStyle: {
				left: null,
				right: null,
				bottom: null,
				top: null,
				position: 'fixed',
				zIndex: 905
			},
			onHide: null,
			onFinish: null
		};
		
		this.options = options;
		this.settings = $.extend({}, this.defaults, this.options);
		
		if(this.options){
			this.settings.coverStyle = $.extend({}, this.defaults.coverStyle, this.options.coverStyle);
			this.settings.boxStyle = $.extend({}, this.defaults.boxStyle, this.options.boxStyle);
		}
		settings = this.settings;
		
		// Set middle
		(function(){
			var screenW = $(window).width();
			var screenH = $(window).height();
			var boxW	= box.outerWidth();
			var boxH	= box.outerHeight();

			var computedX = (screenW - boxW) / 2;
			var computedY = (screenH - boxH) / 2;

			box.css({'left': settings.boxStyle.left === null ? computedX+'px' : settings.boxStyle.left,
				'top': settings.boxStyle.top === null ? computedY+'px' : settings.boxStyle.top,
				'position': settings.boxStyle.position,
				'z-index': settings.boxStyle.zIndex,
				'bottom': settings.boxStyle.bottom === null ? 'none' : settings.boxStyle.bottom,
				'right': settings.boxStyle.right === null ? 'none' : settings.boxStyle.right
			});
		})();
				
		// Make cover
		function makeCover(){
			$("<style>").text("#page-cover {position: fixed; top: 0px; left: 0px; height: 100%; width: 100%;}").appendTo("head");
			cover = $("<div id='page-cover'>").appendTo("body");
			
			var alphaOpacity = 'alpha(opacity='+settings.coverStyle.opacity*100+')';
			cover.css({'background-color': settings.coverStyle.color, 'opacity': settings.coverStyle.opacity, 'filter': alphaOpacity, 'z-index': settings.coverStyle.zIndex});
		}
		
		if(this.settings.cover == true) 
			makeCover();
		
		// check effect
		(effect = function(hide){
			switch(settings.effect){
				case "slideToggle":
					if(!hide) box.slideToggle(settings.duration);
					else box.slideUp(settings.duration);
					break;
				case "toggle":
					if(!hide) box.toggle();
					else box.hide();
					break;
				case "fadeToggle":
					if(!hide) box.fadeToggle(settings.duration);
					else box.fadeOut(settings.duration);
					break;
				default:
					if(!hide)box.slideToggle(settings.duration);
					else box.slideUp(settings.duration);
			}
		})(false);

		// close
		$('html').click(function(){
			effect(true);
			if(settings.cover == true)
				cover.remove();
			onHide();
			isHidden = true;
			
		});
		
		$(box, clickEl).click(function(e){
			e.stopPropagation();
		});
		
		// onHide callback
		function onHide(){
			if(!isHidden && settings.onHide)
				settings.onHide();
		}
		
		// onFinish callback
		if(this.settings.onFinish)
			this.settings.onFinish();
	}
})(jQuery);