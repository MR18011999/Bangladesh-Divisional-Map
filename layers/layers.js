var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Division_1 = new ol.format.GeoJSON();
var features_Division_1 = format_Division_1.readFeatures(json_Division_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Division_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Division_1.addFeatures(features_Division_1);
var lyr_Division_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Division_1, 
                style: style_Division_1,
                popuplayertitle: 'Division',
                interactive: true,
    title: 'Division<br />\
    <img src="styles/legend/Division_1_0.png" /> Barisal<br />\
    <img src="styles/legend/Division_1_1.png" /> Chittagong<br />\
    <img src="styles/legend/Division_1_2.png" /> Dhaka<br />\
    <img src="styles/legend/Division_1_3.png" /> Khulna<br />\
    <img src="styles/legend/Division_1_4.png" /> Mymensingh<br />\
    <img src="styles/legend/Division_1_5.png" /> Rajshahi<br />\
    <img src="styles/legend/Division_1_6.png" /> Rangpur<br />\
    <img src="styles/legend/Division_1_7.png" /> Sylhet<br />\
    <img src="styles/legend/Division_1_8.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Division_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Division_1];
lyr_Division_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Division': 'Division', });
lyr_Division_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Division': 'TextEdit', });
lyr_Division_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Division': 'inline label - visible with data', });
lyr_Division_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});