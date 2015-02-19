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
        map = new google.maps.Map(divDoMapa, opcoes);
        }

var imagens = {
	muitoBom: 'http://i.imgur.com/bFnWq8k.png'
	, bom: 'http://i.imgur.com/VnlbIoL.png'
	, medio: 'http://i.imgur.com/eNAvIvr.png'
	, ruim: 'http://i.imgur.com/uCRXqdV.png'
	, pessimo: 'http://i.imgur.com/biRJBNL.png'
}

var marcadores = [];
var criaMarcador = function(marcador, mapa) {
  var posicao = new google.maps.LatLng(marcador.latitude, marcador.longitude);
  var opcoes = {
    position: posicao
    , title: marcador.titulo
    , animation: google.maps.Animation.DROP
    , icon:{
    		url: marcador.imagem
    		, scaledSize: new google.maps.Size(50, 50)
    	}
    , map: mapa
  }
	var novoMarcador = new google.maps.Marker(opcoes);
  marcadores.push(novoMarcador);
  map.setCenter(novoMarcador.position)
}

function adiciona(){
	var marcador = {
		latitude: -25.425777
		, longitude: -49.3335829	
		, titulo: 'Novo marcador'
		, imagem: imagens.muitoBom
	}
	criaMarcador(marcador, map);
}