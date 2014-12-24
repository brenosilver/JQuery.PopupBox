JQuery.PopupBox
===============

JQuery Plugin for Popup elements

Usage
		$(document).ready(function(){
			$(".link").click(function(){
				$("#contact").popupBox();
			});
		});
		
		Options
		cover : true | false
		effect : toggle | slideToggle
		
		ex: $("#contact").popupBox({cover: true, effect: 'toggle'})
