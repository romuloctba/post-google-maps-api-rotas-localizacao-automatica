console.log('testando o arquivo :)');

var inicial = {
	latitude: -25.428777
	, longitude: -49.3435829
};
var divDoMapa = document.getElementById("map_canvas")
var opcoes = { 
  center: new google.maps.LatLng(inicial.latitude, inicial.longitude)
  , zoom: 10
  , mapTypeId: google.maps.MapTypeId.ROADMAP
};

function initialize() {
        var map = new google.maps.Map(divDoMapa, opcoes);
      }