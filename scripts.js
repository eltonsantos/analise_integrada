var customPopup1 = "Mozilla Toronto Offices<br/><img src='1.jpg' alt='maptime logo gif' width='350px'/>";

var customOptions1 =
        {
        'maxWidth': '500',
        'className' : 'custom'
        }

var customPopup2 = "Mozilla Toronto Offices<br/><img src='http://joshuafrazier.info/images/maptime.gif' alt='maptime logo gif' width='350px'/>";

var customOptions2 =
        {
        'maxWidth': '500',
        'className' : 'custom'
        }

var r1 = [-3.7864725817550275, -38.55222702026367],
    r2 = [-3.699304730613264, -38.587074279785156],
    r3 = [-3.7162636347405162, -38.67530822753906],
    r4 = [-3.5723596985717085, -38.832550048828125],
    r5 = [-3.620330229472515, -39.0838623046875],
    r6 = [-3.4997138463498842, -39.571380615234375],
    r7 = [-3.614848011060838, -39.791107177734375],
    r8 = [-3.736819444924971, -39.980621337890625],
    r9 = [-3.6778915094650726, -40.3472900390625],
    r10 = [-3.543576174276269, -40.64804077148437],
    r11 = [-3.717634037018011, -40.9954833984375],
    r12 = [-3.9485157850410473, -41.12251281738281],
    r13 = [-4.142352205191752, -40.594482421875],
    r14 = [-4.303960496615189, -40.126190185546875],
    r15 = [-4.238910364086154, -39.97444152832031],
    r16 = [-4.236856059768947, -39.81719970703125],
    r17 = [-4.002630248339756, -39.57069396972656],
    r18 = [-4.049891855517624, -39.43817138671875],
    r19 = [-4.0944111352807955, -39.23698425292968],
    r20 = [-4.0954384741490655, -39.05296325683594],
    r21 = [-4.021466724881744, -38.98361206054687],
    r22 = [-3.853978287058018, -38.876495361328125],
    r23 = [-3.725856405931126, -38.79203796386719],
    r24 = [-3.770735477472502, -38.674278259277344];

/*
for (var i = 0, latlngs = [], len = rotas.length; i < len; i++){
    latlngs.push(new L.LatLng(rotas[i][0], rotas[i][1]));
}
*/

var route = L.featureGroup([
    L.marker(r1).on('click', onClickTest),
    L.polyline([r1, r2]),
    L.marker(r2).bindPopup(customPopup2, customOptions2),
    L.polyline([r2, r3]),
    L.marker(r3),
    L.polyline([r3, r4]),
    L.marker(r4),
    L.polyline([r4, r5]),
    L.marker(r5),
    L.polyline([r5, r6]),
    L.marker(r6),
    L.polyline([r6, r7]),
    L.marker(r7),
    L.polyline([r7, r8]),
    L.marker(r8),
    L.polyline([r8, r9]),
    L.marker(r9),
    L.polyline([r9, r10]),
    L.marker(r10),
    L.polyline([r10, r11]),
    L.marker(r11),
    L.polyline([r11, r12]),
    L.marker(r12),
    L.polyline([r12, r13]),
    L.marker(r13),
    L.polyline([r13, r14]),
    L.marker(r14),
    L.polyline([r14, r15]),
    L.marker(r15),
    L.polyline([r15, r16]),
    L.marker(r16),
    L.polyline([r16, r17]),
    L.marker(r17),
    L.polyline([r17, r18]),
    L.marker(r18),
    L.polyline([r18, r19]),
    L.marker(r19),
    L.polyline([r19, r20]),
    L.marker(r20),
    L.polyline([r20, r21]),
    L.marker(r21),
    L.polyline([r21, r22]),
    L.marker(r22),
    L.polyline([r22, r23]),
    L.marker(r23),
    L.polyline([r23, r24]),
    L.marker(r24),
    L.polyline([r24, r1])
]);

/*
var trd = [63.5, 11],
mad = [40.5, -3.5],
lnd = [51.5, -0.5],
ams = [52.3, 4.75],
vlc = [39.5, -0.5];


var route = L.featureGroup([
L.marker(trd),
L.polyline([trd, ams]),
L.marker(ams),
L.polyline([ams, lnd]),
L.marker(lnd),
L.polyline([lnd, mad]),
L.marker(mad),
L.polyline([mad, vlc]),
L.marker(vlc)
]);
*/
//var path = L.polyline(latlngs);

var map = L.map('map').setView([-3.8053, -39.9051], 9);
/*
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a target="_blank" href="https://openstreetmap.org" title="&copy; OpenStreetMap contributors">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);
*/

//map.fitBounds(L.latLngBounds(latlngs));

map.fitBounds(route.getBounds());

/*
map.addLayer(L.marker(latlngs[0]));
map.addLayer(L.marker(latlngs[len - 1]));
*/
map.addLayer(route);

var osmLink = "<a href='http://www.openstreetmap.org'>Open StreetMap</a>";

attrLink = "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licences/by/3.0'>CC BY 3.0</a>. Data by <a href='http://www.openstreetmap.org'>Open StreetMap</a>, under <a href='http://creativecommons.org/licences/by-sa/3.0'>CC BY SA</a>";

attrLinkToner = "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, under <a href='http://creativecommons.org/licences/by/3.0'>CC BY 3.0</a>. Data by <a href='http://www.openstreetmap.org'>Open StreetMap</a>, under <a href='http://www.openstreetmap.org/copyright'>ODbL</a>.";

//rotas.bindPopup("Hello world");
var openMap = L.tileLayer(
"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: osmLink,
    maxZoom: 18
}).addTo(map);

var terrainMap = L.tileLayer(
"http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg", {
    attribution: attrLink,
    maxZoom: 18
}).addTo(map);

var tonerMap = L.tileLayer(
"http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png", {
attribution: attrLinkToner,
maxZoom: 18
}).addTo(map);

var watercolorMap = L.tileLayer(
"http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg", {
    attribution: attrLink,
    maxZoom: 18
}).addTo(map);

var baseLayers = {
    "Stamen Toner": tonerMap,
    "Stamen Watercolor" : watercolorMap,
    "OpenStreetmap": openMap,
    "Stamen Terrain": terrainMap
};

L.control.layers(baseLayers).addTo(map);

function snake() {
    route.snakeIn();
}

route.on('snakestart snake snakeend', function(ev){
    console.log(ev.type);
});



function onClickTest(e){
    sidebar.show();
}

var sidebar = L.control.sidebar('sidebar', {
    closeButton: true,
    position: 'left'
});

map.addControl(sidebar);

setTimeout(function () {
    sidebar.show();
}, 500);

map.on('click', function () {
    sidebar.hide();
});

L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
    console.log('Close button clicked.');
});