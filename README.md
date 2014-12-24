JQuery.PopupBox
===============

JQuery Plugin for Popup elements

<h4>Usage</h4>

		$(document).ready(function(){
			$(".link").click(function(){
				$("#contact").popupBox();
			});
		});
		
<h4>Options</h4>
		cover : true | false
		effect : toggle | slideToggle
		
		ex: $("#contact").popupBox({cover: true, effect: 'toggle'})
