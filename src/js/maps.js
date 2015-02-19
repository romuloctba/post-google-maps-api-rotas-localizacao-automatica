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
	 			geocoder = new google.maps.Geocoder();
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

function converteEndereco(endereco, avaliacao) {
  geocoder.geocode( { 'address': endereco}, function(resultado, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marcador = {
		      	latitude: resultado[0].geometry.location.k
				, longitude: resultado[0].geometry.location.D	
				, titulo: 'Novo marcador'
				, imagem: avaliacao
      }
	     criaMarcador(marcador, map)
    } else {
      alert('Erro ao converter endereço: ' + status);
    }
  });
}

var imgArray = [imagens.muitoBom, imagens.bom, imagens.medio, imagens.ruim, imagens.pessimo]

function converte(){
	var endereco = document.getElementById('endereco').value;
	var seletor = document.getElementById("avaliacao");
	var avaliacao = seletor.options[seletor.selectedIndex].value;
	var imagemMarcador = imgArray[avaliacao]
	converteEndereco(endereco, imagemMarcador);
	map.setZoom(14);
}