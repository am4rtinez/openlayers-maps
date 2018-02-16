$(document).ready(function(){
	function initMap(){
		var map = new ol.Map({
        	target: 'map',
        	layers: [
          		new ol.layer.Tile({
            		source: new ol.source.OSM()
          		})
        	],
        	view: new ol.View({
          		center: ol.proj.fromLonLat([2.8502,39.3694]),
          		zoom: 9
        	})
      	});
	}

	initMap();
});