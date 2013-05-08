$(function(){
	var map;
	var offices = [
		{name:'Atikokan',lat:48.757506,lng:-91.623756},
		{name:'Dryden',lat:49.777683,lng:-92.748217},
		{name:'Fort Frances',lat:48.611154,lng:-93.397204},
		{name:'Kenora',lat:49.761738,lng:-94.529006},
		{name:'Red Lake',lat:51.019045,lng:-93.827051},
		{name:'Sioux Lookout',lat:50.099192,lng:-91.915054}
	];

	num_offices = offices.length;
	map = new GMaps({
		div:'#map-region',
        lat:49,
        lng:-92
	});

	for (i = 0; i < num_offices; i++) {
		map.addMarker({lat:i.lat,lng:i.lng,title:i.name})	
	}
});
