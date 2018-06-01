var map = L.map('map',{
    minZoom: 7,
    maxZoom: 13,
    zoomControl: false
  }).setView([-3.8053, -39.9051], 9);




var rotas = L.geoJSON(paradas, {
    onEachFeature: onEachFeature
}).addTo(map);

/*
function onEachFeature(feature, layer){
    layer.on('click', function(e){
        $('.orange').html(feature.properties.nome);
        $('.city').html(feature.properties.imagem);
        $('.event').html(feature.properties.descricao);
    });
}
*/

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

var osmLink = "<a href='http://www.openstreetmap.org'>Open StreetMap</a>";
/*
attrLink = "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licences/by/3.0'>CC BY 3.0</a>. Data by <a href='http://www.openstreetmap.org'>Open StreetMap</a>, under <a href='http://creativecommons.org/licences/by-sa/3.0'>CC BY SA</a>";
*/
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

var baseLayers = {
    "OpenStreetmap": openMap,
    "Stamen Terrain": terrainMap
};

L.control.zoom({
    position:'topright'
}).addTo(map);

L.control.layers(baseLayers).addTo(map);

for (var i = 0, latlngs = [], len = rotas.length; i < len; i++){
    latlngs.push(new L.LatLng(rotas[i][0], rotas[i][1]));
}

function snake() {
    rotas.snakeIn();
}

rotas.on('snakestart snake snakeend', function(ev){
    console.log(ev.type);
});

