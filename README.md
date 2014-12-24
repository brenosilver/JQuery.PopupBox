JQuery.PopupBox
===============
JQuery PopupBox v0.13 / 12-24-2014  
  
<strong>Lightweight plugin for making hidden elements to popup in the center of the screen.</strong>  
  
Breno Dadalto Silva (brenosilver) licensed under the MIT and GPL licenses.

Fiddle:
http://jsfiddle.net/brenosilver/d6nvd9vr/

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
		effect : toggle | slideToggle | fadeToggle
		duration : 400
		
		ex: $("#contact").popupBox({cover: true, effect: 'fadeToggle', duration: 600})
		
<h4>CallBacks:</h4>
	onFinish:       function(){},
	onHide:       	function(){}
	ex: $("#contact").popupBox({onHide: function(){
			console.log("Hidden")}
  	    })
