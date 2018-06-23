var map = L.map('map',{
    minZoom: 7,
    maxZoom: 13,
    zoomControl: false
  }).setView([-3.6053, -40.1051], 9);

var i = 0;

var rotas = L.geoJSON(paradas, {
    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng){
        //console.log("Qtd: " + paradas.features.length)

        i += 1;
        console.log("Valor de i: " + i)
        return L.marker(latlng, {
            icon: new L.AwesomeNumberMarkers({
                number: i,
                markerColor: 'beige',
            }),
        });

    }

}).addTo(map);


function onEachFeature(feature, layer){

    layer.on({
        click: function(e){

            var latLngs = [e.target.getLatLng()];
            var markerBounds = L.latLngBounds(latLngs);
            map.fitBounds(markerBounds);

            $('.orange').html(feature.properties.nome);
            $('.city').html(feature.properties.imagem);
            $('.event').html(feature.properties.descricao);

        }

    });
    
}

function zoomToFeature(e) {
    console.log("pass here")
    map.fitBounds(e.target.getBounds());
}

function markerOnClick(e)
{
    console.log("here")
    var latLngs = [e.target.getLatLng()];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
}

var camadaMunicipios = L.geoJSON(municipios, {
    style: function(feature){
        return {
            color: "#091",
            fillColor: "#aa9",
            dashArray: '3',
            weight: 2
        }
    },
    onEachFeature: onEachFeature_mun
}).addTo(map);

function onEachFeature_mun(feature, layerMunicipios){
    popupMunicipios = feature.properties.name;
    layerMunicipios.bindPopup(popupMunicipios);
}

var osmLink = "<a href='http://www.openstreetmap.org'>Open StreetMap</a> | <span>Desenvolvido por <a href='https://twitter.com/eltin182' target='blank'>@eltin182</a>. 2018.</span>";

var openMap = L.tileLayer(
"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: osmLink,
    maxZoom: 18
}).addTo(map);

var terrainMap = L.tileLayer(
"http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg", {
    attribution: osmLink,
    maxZoom: 18
}).addTo(map);

var objCamadas = {
    "Municípios" : camadaMunicipios
};

var baseLayers = {
    "OpenStreetmap": openMap,
    "Stamen Terrain": terrainMap
};

L.control.zoom({
    position:'topright'
}).addTo(map);

L.control.layers(baseLayers, objCamadas).addTo(map);

for (var i = 0, latlngs = [], len = rotas.length; i < len; i++){
    latlngs.push(new L.LatLng(rotas[i][0], rotas[i][1]));
}

function snake() {
    rotas.snakeIn();
}

rotas.on('snakestart snake snakeend', function(ev){
    console.log(ev.type);
});