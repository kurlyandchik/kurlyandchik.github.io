function GetMap() {
    map = new OpenLayers.Map("OSMap");//инициализация карты
    var mapnik = new OpenLayers.Layer.OSM();//создание слоя карты
    map.addLayer(mapnik);//добавление слоя
    map.setCenter(new OpenLayers.LonLat(31.83, 51.0532) //(широта, долгота)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), // переобразование в WGS 1984
            new OpenLayers.Projection("EPSG:900913") // переобразование проекции
        ), 10 // масштаб
    );
    var layerMarkers = new OpenLayers.Layer.Markers("Markers");//создаем новый слой маркеров
    map.addLayer(layerMarkers);//добавляем этот слой к карте
    map.events.register('click', map, function (e) {
        var size = new OpenLayers.Size(21, 25);//размер картинки для маркера
        var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h); //смещение картинки для маркера
        var icon = new OpenLayers.Icon('/Images/smilies.png', size, offset);//картинка для маркера
        layerMarkers.addMarker(//добавляем маркер к слою маркеров
            new OpenLayers.Marker(map.getLonLatFromViewPortPx(e.xy), //координаты вставки маркера
                icon));//иконка маркера
    }); //добавление событие клика по карте
}