$(document).ready(function(){

	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

	preload([
	    'assets/img/syria.png',
	    'assets/img/egypt.png',
	    'assets/img/lebanon.png',
	    'assets/img/iraq.png',
	    'assets/img/jordan.png',
	    'assets/img/turkey.png'
	]);

	// responsive image map
	$('img[usemap]').rwdImageMaps();

	overlay_visible = false;

	// country click
	$(".country").click(function(event){
		if (overlay_visible === false) {
			var country = $(this).attr("data");
			$("." + country + "_info").css({ "display" : "block" });
			$("#worldmap").attr("src", "assets/img/map.png");
			overlay_visible = true;
		}
		event.preventDefault();
	});

	// country hover
	$(".country").hover(function(){
		if (overlay_visible === false) {
			var country = "assets/img/" + $(this).attr("data") + ".png";
			$("#worldmap").attr("src", country);
		}
	}, function(){
		if (overlay_visible === false) {
			$("#worldmap").attr("src", "assets/img/map.png");
		}
	});

	// close button
	$(".close").click(function(){
		if (overlay_visible === true) {
			$(this).parent(".info").css({ "display" : "none" });
			overlay_visible = false;
		}
	});

});