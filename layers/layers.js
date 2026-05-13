var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_1 = format_ADMINISTRASIKECAMATAN_1.readFeatures(json_ADMINISTRASIKECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_1.addFeatures(features_ADMINISTRASIKECAMATAN_1);
var lyr_ADMINISTRASIKECAMATAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_1, 
                style: style_ADMINISTRASIKECAMATAN_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_1.png" /> ADMINISTRASIKECAMATAN'
            });
var format_PEMUKIMAN_2 = new ol.format.GeoJSON();
var features_PEMUKIMAN_2 = format_PEMUKIMAN_2.readFeatures(json_PEMUKIMAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_2.addFeatures(features_PEMUKIMAN_2);
var lyr_PEMUKIMAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_2, 
                style: style_PEMUKIMAN_2,
                popuplayertitle: 'PEMUKIMAN',
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_2.png" /> PEMUKIMAN'
            });
var format_JARAKRUMAHSAKIT_3 = new ol.format.GeoJSON();
var features_JARAKRUMAHSAKIT_3 = format_JARAKRUMAHSAKIT_3.readFeatures(json_JARAKRUMAHSAKIT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARAKRUMAHSAKIT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARAKRUMAHSAKIT_3.addFeatures(features_JARAKRUMAHSAKIT_3);
var lyr_JARAKRUMAHSAKIT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARAKRUMAHSAKIT_3, 
                style: style_JARAKRUMAHSAKIT_3,
                popuplayertitle: 'JARAK RUMAH SAKIT',
                interactive: true,
                title: '<img src="styles/legend/JARAKRUMAHSAKIT_3.png" /> JARAK RUMAH SAKIT'
            });
var format_RUMAHSAKIT_4 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_4 = format_RUMAHSAKIT_4.readFeatures(json_RUMAHSAKIT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_4.addFeatures(features_RUMAHSAKIT_4);
var lyr_RUMAHSAKIT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_4, 
                style: style_RUMAHSAKIT_4,
                popuplayertitle: 'RUMAHSAKIT',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_4.png" /> RUMAHSAKIT'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_1.setVisible(true);lyr_PEMUKIMAN_2.setVisible(true);lyr_JARAKRUMAHSAKIT_3.setVisible(true);lyr_RUMAHSAKIT_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ADMINISTRASIKECAMATAN_1,lyr_PEMUKIMAN_2,lyr_JARAKRUMAHSAKIT_3,lyr_RUMAHSAKIT_4];
lyr_ADMINISTRASIKECAMATAN_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JARAKRUMAHSAKIT_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit': 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit', 'data_rumah_sakit_sungaipenuh_Jumlah Dokter': 'data_rumah_sakit_sungaipenuh_Jumlah Dokter', 'data_rumah_sakit_sungaipenuh_Jumlah Perawat': 'data_rumah_sakit_sungaipenuh_Jumlah Perawat', 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)': 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)', 'data_rumah_sakit_sungaipenuh_Status': 'data_rumah_sakit_sungaipenuh_Status', });
lyr_RUMAHSAKIT_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit': 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit', 'data_rumah_sakit_sungaipenuh_Jumlah Dokter': 'data_rumah_sakit_sungaipenuh_Jumlah Dokter', 'data_rumah_sakit_sungaipenuh_Jumlah Perawat': 'data_rumah_sakit_sungaipenuh_Jumlah Perawat', 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)': 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)', 'data_rumah_sakit_sungaipenuh_Status': 'data_rumah_sakit_sungaipenuh_Status', });
lyr_ADMINISTRASIKECAMATAN_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JARAKRUMAHSAKIT_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit': '', 'data_rumah_sakit_sungaipenuh_Jumlah Dokter': '', 'data_rumah_sakit_sungaipenuh_Jumlah Perawat': '', 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)': '', 'data_rumah_sakit_sungaipenuh_Status': '', });
lyr_RUMAHSAKIT_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit': 'TextEdit', 'data_rumah_sakit_sungaipenuh_Jumlah Dokter': 'Range', 'data_rumah_sakit_sungaipenuh_Jumlah Perawat': 'Range', 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)': 'TextEdit', 'data_rumah_sakit_sungaipenuh_Status': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JARAKRUMAHSAKIT_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit': 'no label', 'data_rumah_sakit_sungaipenuh_Jumlah Dokter': 'no label', 'data_rumah_sakit_sungaipenuh_Jumlah Perawat': 'no label', 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)': 'no label', 'data_rumah_sakit_sungaipenuh_Status': 'no label', });
lyr_RUMAHSAKIT_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'data_rumah_sakit_sungaipenuh_Tipe Rumah Sakit': 'no label', 'data_rumah_sakit_sungaipenuh_Jumlah Dokter': 'no label', 'data_rumah_sakit_sungaipenuh_Jumlah Perawat': 'no label', 'data_rumah_sakit_sungaipenuh_Keterangan (REMARK)': 'no label', 'data_rumah_sakit_sungaipenuh_Status': 'no label', });
lyr_RUMAHSAKIT_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});