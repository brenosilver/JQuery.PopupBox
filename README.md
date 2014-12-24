JQuery.PopupBox
===============

Lightweight plugin for making hidden elements to popup in the center of the screen.

Fiddle:
http://jsfiddle.net/f5Lwsqh5/

<h2>Usage</h2>

<h4>Include:</h4>

	<script src="js/jquery.popupBox.js"></script>

<h4>js:</h4>
	$(document).ready(function(){
		$(".link").click(function(){
			$("#contact").popupBox();
		});
	});
	
<h4>css:</h4>

	#contact {
		display:none;
	}
		
<h4>Options:</h4>
		cover : true | false
		effect : toggle | slideToggle
		
		ex: $("#contact").popupBox({cover: true, effect: 'toggle'})
