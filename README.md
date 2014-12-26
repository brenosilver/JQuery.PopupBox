JQuery.PopupBox
===============
JQuery PopupBox v0.18 / 12-25-2014  
  
<strong>Lightweight plugin for making hidden elements to popup in the center of the screen.</strong>  
  
Breno Dadalto Silva (brenosilver) licensed under the MIT and GPL licenses.

Fiddle:
http://jsfiddle.net/brenosilver/d6nvd9vr/

<h2>Usage</h2>

<h4>Include:</h4>

	<script src="jquery.popupBox.js"></script>

<h4>js:</h4>
	$(document).ready(function(){
		$('.link').popupBox($("#contact"), {cover:true});
	});
	
<h4>css:</h4>

	#contact {
		display:none;
	}
		
<h4>Options:</h4>
		cover : true | false
		effect : toggle | slideToggle | fadeToggle
		duration : 400
		
		ex: $(".link").popupBox($('#contact'), {cover: true, effect: 'fadeToggle', duration: 600})
		
		/** Styling **/
		coverStyle: { color | opacity | zIndex }
		boxStyle: { left | right | bottom | top | position | zIndex }
		
		ex: $(".link").popupBox($('#contact'), { cover: true, coverStyle:{color: 'red', opacity: 0.6} })
		
		/** CallBacks **/
		onFinish:       function(){}
		onHide:       	function(){}
		
		ex: $(".link").popupBox($('#contact'), {onHide: function(){
				console.log("Hidden")}
	  	    })
