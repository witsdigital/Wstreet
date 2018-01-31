$(function () {


	"use strict";

	var mapEvent = $('#map');
	var mapInside = $('#map_in');

	mapEvent.on("mouseover", function ()  {
		mapInside.css("pointer-events", "auto");
		if('#map_in') map.setOptions({ scrollwheel: false });
	});

	mapEvent.on("mouseleave", function () {
		mapInside.css("pointer-events", "none");

	});

});


