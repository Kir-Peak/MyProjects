var wms_layers = [];

var format_Buildings_0 = new ol.format.GeoJSON();
var features_Buildings_0 = format_Buildings_0.readFeatures(json_Buildings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_0.addFeatures(features_Buildings_0);
var lyr_Buildings_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_0, 
                style: style_Buildings_0,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_0.png" /> Buildings'
            });
var format_MainRoad_1 = new ol.format.GeoJSON();
var features_MainRoad_1 = format_MainRoad_1.readFeatures(json_MainRoad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRoad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainRoad_1.addFeatures(features_MainRoad_1);
var lyr_MainRoad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainRoad_1, 
                style: style_MainRoad_1,
                popuplayertitle: "Main-Road",
                interactive: true,
                title: '<img src="styles/legend/MainRoad_1.png" /> Main-Road'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: "Roads",
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_Trees_3 = new ol.format.GeoJSON();
var features_Trees_3 = format_Trees_3.readFeatures(json_Trees_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_3.addFeatures(features_Trees_3);
var lyr_Trees_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trees_3, 
                style: style_Trees_3,
                popuplayertitle: "Trees",
                interactive: true,
                title: '<img src="styles/legend/Trees_3.png" /> Trees'
            });

lyr_Buildings_0.setVisible(true);lyr_MainRoad_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_Trees_3.setVisible(true);
var layersList = [lyr_Buildings_0,lyr_MainRoad_1,lyr_Roads_2,lyr_Trees_3];
lyr_Buildings_0.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Cost': 'Cost', 'Capacity': 'Capacity', });
lyr_MainRoad_1.set('fieldAliases', {'id': 'id', 'Cost': 'Cost', 'Distance': 'Distance', });
lyr_Roads_2.set('fieldAliases', {'id': 'id', 'Distance': 'Distance', });
lyr_Trees_3.set('fieldAliases', {'id': 'id', 'Tree': 'Tree', });
lyr_Buildings_0.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Cost': 'TextEdit', 'Capacity': 'TextEdit', });
lyr_MainRoad_1.set('fieldImages', {'id': 'TextEdit', 'Cost': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'id': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Trees_3.set('fieldImages', {'id': 'TextEdit', 'Tree': 'TextEdit', });
lyr_Buildings_0.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Cost': 'no label', 'Capacity': 'no label', });
lyr_MainRoad_1.set('fieldLabels', {'id': 'no label', 'Cost': 'no label', 'Distance': 'no label', });
lyr_Roads_2.set('fieldLabels', {'id': 'no label', 'Distance': 'no label', });
lyr_Trees_3.set('fieldLabels', {'id': 'no label', 'Tree': 'no label', });
lyr_Trees_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});