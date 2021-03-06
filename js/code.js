$(document).ready(function(){
	/*
	* IDENTIFICADORES CIUDADES OPENWEATHERMAPS.
	* 1- 2512989 - Palma - MALLORCA
	* 2- 2514097 - Marratxi - MALLORCA
	* 3- 2520493 - Calvia - MALLORCA
	* 4- 2514216 - Manacor - MALLORCA
	* 5- 3124967 - Ciutadella - MENORCA
	* 6- 2514301 - Mao - MENORCA
	* 7- 2516479 - Eivissa - EIVISSA
	* 8- 2521741 - Andratx - MALLORCA
	* 9- 2516452 - Inca - MALLORCA
	* 10- 2510821 - Soller - MALLORCA
	* 11- 2512432 - Pollença - MALLORCA
	* 12- 2521534 - Arta - MALLORCA
	* 13- 2511106 - Santanyi - MALLORCA
	* 14- 2514984 - Llucmajor - MALLORCA
	* 15- 2522259 - Alaior - MENORCA
	* 16- 2513922 - Es Mercadal - MENORCA
	* 17- 2511448 - Sant Antoni de Portmany - EIVISSA
	* 18- 2511381 - Sant Francesc de Formentera - FORMENTERA
	* 19- 2511162 - Santa Eulalia des Riu - EIVISSA
	*/
	var cityIDs = "2512989,2514097,2520493,2514216,3124967,2514301,2516479,"
	+ "2521741,2516452,2510821,2512432,2521534,2511106,2514984,2522259,2513922,"
	+ "2511448,2511381,2511162";

	var scaleLineControl = new ol.control.ScaleLine();
	var unitsSelect = document.getElementById('units');

	var map;

	function initMap(){

	    var thunderforestAttributions = [
	        new ol.Attribution({
	            html: 'Tiles &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>'
	        }),
	        ol.source.OSM.ATTRIBUTION
	    ];

	    var openWeatherMapsAttributions = [
	        new ol.Attribution({
	            html: 'Tiles &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>'
	        }),
	        ol.source.OSM.ATTRIBUTION
	    ];

	    var openSeaMapsAttributions = [
	        new ol.Attribution({
	            html: 'All maps © <a href="http://www.openseamap.org/">OpenSeaMap</a>'
	        }),
	        ol.source.OSM.ATTRIBUTION
	    ];

	//http://geoserver.112ib.com/SEIB112/wms?service=WMS&version=1.1.0&request=GetMap&layers=SEIB112:Rotondes_Balears&styles=&bbox=315772.65816768754,4258753.264085088,639563.3621587639,4449363.163309564&width=768&height=452&srs=EPSG:32631&format=text%2Fhtml%3B%20subtype%3Dopenlayers
	//new OpenLayers.Layer.WMS( "Rotondas","http://geoserver.112ib.com/geoserver/wms/SEIB112", {layers: 'SEIB112:Rotondes_Balears'});
	    map = new ol.Map({
	      controls: ol.control.defaults({
	          attributionOptions: {
	            collapsible: false
	          }
	        }).extend([
	          scaleLineControl
	        ]),
	      layers: [
	      new ol.layer.Group({
	          'title': 'Mapas base',
	          layers: [
	            new ol.layer.Tile({
	              title: 'OSM',
	              type: 'base',
	              visible: true,
	              source: new ol.source.OSM()
	            }),
	            new ol.layer.Tile({
	              title: 'Water color',
	              type: 'base',
	              visible: false,
	              source: new ol.source.Stamen({
	                layer: 'watercolor'
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - OpenCycleMap',
	              type: 'base',
	              visible: false,
	              source: new ol.source.XYZ({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Transport',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Landscape',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Outdoors',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Transport Dark',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Spinal Map',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Pioneer',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Mobile Atlas',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Thunderforest - Neighbourhood',
	              type: 'base',
	              visible: false,
	              source: new ol.source.OSM({
	                  //url: 'http://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
	                  url: 'https://{a-c}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=e9710abd6d974236a906d50bae143d0b',
	                  attributions: thunderforestAttributions
	              })
	            })
	          ]
	        }),
	      	new ol.layer.Group({
	          'title': 'Cartografía',
	          layers: [
	          //http://geoserver.112ib.com/geoserver/wms
	          	new ol.layer.Tile({
	          		title: 'Incidentes',
	          		//type: 'image',
	          		visible: false,
		        	source: new ol.source.TileWMS({
		        		url: 'http://172.30.3.149:8080/geoserver/wms',
		        		params: {
		        			'LAYERS': 'postgresBeta:GeoPositionincident',
		        			'VERSION': '1.3.0',
		        			'FORMAT': 'image/png',
		        			'TILED': true
		        		},
		        		serverType: 'geoserver',
	        		}),
	        	}),
	        	new ol.layer.Tile({
	          		title: 'SEVESO_I_TERMIQUES',
	          		//type: 'image',
	          		visible: false,
		        	source: new ol.source.TileWMS({
		        		url: 'http://geoserver.112ib.com/geoserver/wms',
		        		params: {
		        			'LAYERS': 'SEIB112:SEVESO_I_TERMIQUES',
		        			'VERSION': '1.3.0',
		        			'FORMAT': 'image/png',
		        			'TILED': true
		        		},
		        		serverType: 'geoserver',
	        		}),
	        	}),
	        	new ol.layer.Tile({
	          		title: 'Rotondas',
	          		//type: 'image',
	          		visible: false,
		        	source: new ol.source.TileWMS({
		        		url: 'http://geoserver.112ib.com/geoserver/wms',
		        		params: {
		        			'LAYERS': 'SEIB112:Rotondes_Balears',
		        			'VERSION': '1.3.0',
		        			'FORMAT': 'image/png',
		        			'styles': 'SEIB112:XarxaViaria_Rotondes',
		        			'TILED': true
		        		},
		        		serverType: 'geoserver',
	        		}),
	        	})
	          ]
	        }),
	        new ol.layer.Group({
	          title: 'Capas',
	          layers: [
	            new ol.layer.Tile({
	              title: 'OpenSeaMap',
	              visible: false,
	              source: new ol.source.OSM({
	                url: 'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
	                attributions: openSeaMapsAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Temperatura',
	              visible: false,
	              source: new ol.source.XYZ({
	                url: 'http://{a-c}.tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=ad1b5e5251ef085417fb1bfd2f26cb45&lang=es',
	                attributions: openWeatherMapsAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Nubes',
	              visible: false,
	              source: new ol.source.XYZ({
	                url: 'http://{a-c}.tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=ad1b5e5251ef085417fb1bfd2f26cb45&lang=es',
	                attributions: openWeatherMapsAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Lluvia',
	              visible: false,
	              source: new ol.source.XYZ({
	                url: 'http://{a-c}.tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=ad1b5e5251ef085417fb1bfd2f26cb45&lang=es',
	                attributions: openWeatherMapsAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Viento',
	              visible: false,
	              source: new ol.source.XYZ({
	                url: 'http://{a-c}.tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=ad1b5e5251ef085417fb1bfd2f26cb45&lang=es',
	                attributions: openWeatherMapsAttributions
	              })
	            }),
	            new ol.layer.Tile({
	              title: 'Presion',
	              visible: false,
	              source: new ol.source.XYZ({
	                url: 'http://{a-c}.tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=ad1b5e5251ef085417fb1bfd2f26cb45&lang=es',
	                attributions: openWeatherMapsAttributions
	              })
	            })
	          ]
	        })
	      ],  
	      target: 'map',
	      view: new ol.View({
	        center: ol.proj.transform([2.8502, 39.3694], 'EPSG:4326', 'EPSG:3857'),
	        zoom: 9
	        //center: ol.proj.fromLonLat([2.8502,39.3694]),
	        //zoom: 9
	      })
	    });
	         
	    var layerSwitcher = new ol.control.LayerSwitcher({
	      tipLabel: 'Leyenda'
	    });
	    map.addControl(layerSwitcher);
	    layerSwitcher.showPanel();

	    //Añadimos el Slider de control del Zoom.
	    map.addControl(new ol.control.ZoomSlider());

	    $.getJSON('http://api.openweathermap.org/data/2.5/group?id='+cityIDs+'&units=metric&lang=es&appid=ad1b5e5251ef085417fb1bfd2f26cb45', function(data) {
	      ponerMarkers(data);
	    });

	    function ponerMarkers(json){

		    $.each(json.list, function(j, item){
		        //console.log(item);
		        var nom = item.name;
		        var lat = item.coord.lat;
		        var lon = item.coord.lon;
		        var temperatura = Math.floor(item.main.temp);

				//TODO: Añadir información meteo en el punto abriendo un globo estilo Google Earth.        
		        var geoMarker = new ol.Feature({
		          type: 'geoMarker',
		          geometry: new ol.geom.Point(ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857')),
		          name: nom
		        });
		        
		        var vectorLayer = new ol.layer.Vector({
		          source: new ol.source.Vector({
		            features: [geoMarker]
		          }),
		          style: new ol.style.Style({
		            image: new ol.style.Circle({
		              radius: 7,
		              snapToPixel: false,
		              fill: new ol.style.Fill({color: 'rgba(255, 0, 0, 0.63)'}),
		              stroke: new ol.style.Stroke({color: 'black', width: 2}),
		              opacity: 56
		            })
		          })
		        });        
		        map.addLayer(vectorLayer);

		        var incidents = new ol.layer.Tile({
		        	source: new ol.source.TileWMS({
		        		url: 'http://172.30.3.149:8080/geoserver/wms',
		        		params: {
		        			'LAYERS': 'postgresBeta:GeoPositionincident',
		        			'VERSION': '1.3.0',
		        			'FORMAT': 'image/png',
		        			'TILED': true
		        		}
		        	}),
		        });
		        //map.addLayer(incidents);

		    });
	      
	    }
	}  

	initMap();
});