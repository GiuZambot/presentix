$(document).ready(function(){
						   
	resizeWin()
		
	// adiciona slide
	$(".addSlide").click(function(){
		$(".framesList").append('<li></li>')						  
	});
	
	// sortable dos frames
	$(".framesList").sortable();
	
	// sidebar
	$(document).on('click', '.showSide',function(){
		$(this).hide();
		$(".hideSide").show();
		$('.sidebar').animate({ left:0})
										 
	});
	
	$(document).on('click', '.hideSide',function(){
		$(this).hide();
		$(".showSide").show();
		$('.sidebar').animate({ left:"-100%"})
										 
	});
	
	$(document).on('click', '.framesList li', function(){
		$('.framesList li').removeClass('on')
		$(this).addClass('on')	
	});
	
	
	// redimensionamento de janela e ajuste para mobile
	$(window).resize(function(){
		resizeWin()						  
	})
	
	function resizeWin(){
		wW	= $(window).width();
		if( wW < 600 ){
			$(".showSide").show();
			$('.sidebar').css('left','-100%')
		} else{
			$(".showSide, .hideSide").hide();
			$('.sidebar').css('left','0')
		}
		
	}
	
	
	// zoom tool
	$( ".zoomViewer" ).draggable({ containment: ".positioner", scroll: false });
	
	$( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60
    });
	
	// editor
	$('#editor').wysiwyg();
	
	// 3d control
	var xAngle = 0, yAngle = 0;
	
	$(".xControl").change(function(){
		var newDeg = $(this).val();
			var newDeg = $(this).val();
		if( newDeg > 0 && newDeg < 360 ){
			xAngle = $(this).val();
		} else {
			xAngle = 0;
			$(this).val('0');
			alert("Por favor, digite um ângulo válido.")	
		}
		document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
		document.getElementById('cube').style.MozTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
		
	});
	
	$(".yControl").change(function(){
		var newDeg = $(this).val();
		if( newDeg > 0 && newDeg < 360 ){
			yAngle = $(this).val();
		} else {
			yAngle = 0;
			$(this).val('0');
			alert("Por favor, digite um ângulo válido.")	
		}
		document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
		document.getElementById('cube').style.MozTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	});
	
	$(".rControl").change(function(){
		var degree = $(this).val();
		if( degree > 0 && degree < 360 ){
			degree = $(this).val();
		} else {
			degree = 0;
			$(this).val('0');
			alert("Por favor, digite um ângulo válido.")	
		}
		
		$('.roateRbox').css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
		$('.roateRbox').css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
	
	});
	
	$( "#yslider" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 360,
      slide: function( event, ui ) {
        $( ".yControl" ).val(ui.value).trigger("change");
      }
    });
	
	$( "#xslider" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 360,
      slide: function( event, ui ) {
        $( ".xControl" ).val(ui.value).trigger("change");
      }
    });
	
	$( "#rslider" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 360,
      slide: function( event, ui ) {
        $( ".rControl" ).val(ui.value).trigger("change");
      }
    });

		
});