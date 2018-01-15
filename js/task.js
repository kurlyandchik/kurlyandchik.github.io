function initStatus() {
    $('.btnListStatus').on('click', function () {
        if($(this).hasClass('openStatus')){
            $(this).removeClass('openStatus');
            $('.block-list-status_list').hide();
        } else {
            $(this).addClass('openStatus');
            $('.block-list-status_list').show();
        }
    })
}

function initFilterA() {
    $('.container-active-filter_title').on('click', function () {
        if($(this).hasClass('openFilter')){
            $(this).removeClass('openFilter');
            $('.block-active-filter-list').hide();
        } else {
            $(this).addClass('openFilter');
            $('.block-active-filter-list').show();
        }
    })
}

function initFilterT() {
    $('.btnFilterTask').on('click', function () {
        $('.block-filter-task-table').show();
    });
    $('.btnCloseFilterTask').on('click', function () {
        $('.block-filter-task-table').hide();
    });
}

function initTooltip() {
    $('.tooltip-h[data-toggle=tooltip]').tooltip();
}

function initStatusTask() {
    $('.btnStatusTask').on('click', function () {
        if($(this).hasClass('openStatusTask')){
            $(this).removeClass('openStatusTask');
            $('.block-status-task').hide();
        } else {
            $(this).addClass('openStatusTask');
            $('.block-status-task').show();
        }
    })
}

function initBrigadeEdit() {
    $('.btnBrigadeE').on('click', function () {
        if($(this).hasClass('closeBrigadeE')){
            $(this).removeClass('closeBrigadeE');
            $('.block-status-brigade').show();
        }
    });
    $('.btnPodmenu').on('click', function () {
        $('.block-podmenu').show();
    })
}

function initExport() {
    $('.btnExport').on('click', function () {
        if($(this).hasClass('openExport')){
            $(this).removeClass('openExport');
            $('.block-export').hide();
        } else {
            $(this).addClass('openExport');
            $('.block-export').show();
        }
    })
}

function initPopup() {
    $(".btnPopup").each(function(){
        var $popup = $(this);
        var widthPopup = $popup.data("widthPopup");
        $popup.fancybox({
            padding: 0,
            maxWidth: widthPopup,
            width: '100%',
            minWidth: widthPopup,
            autoHeight : true,
            beforeShow: function () {
                $(".fancybox-inner").mCustomScrollbar();
                $(".container-content").mCustomScrollbar();
                if($popup.is('[data-map="map-task"]')){
                    initMapTask();
                } else if ($popup.is('[data-map="maps-task"]')){
                    initMapsTask();
                }
            }
        });
    });
}

function initMapTask() {
    map = new OpenLayers.Map("mapTask");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
    map.setCenter(new OpenLayers.LonLat(31.83, 51.0532)
        .transform(
            new OpenLayers.Projection("EPSG:4326"),
            new OpenLayers.Projection("EPSG:900913")
        ), 10
    );
    var layerMarkers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(layerMarkers);
    map.events.register('click', map, function (e) {
        var size = new OpenLayers.Size(21, 25);
        var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
        var icon = new OpenLayers.Icon('/Images/smilies.png', size, offset);
        layerMarkers.addMarker(
            new OpenLayers.Marker(map.getLonLatFromViewPortPx(e.xy),
                icon));
    });
}

function initAccordionTask() {
    $('.btnAccordion').on('click', function () {
        $('.activeBurger').removeClass('activeBurger');
        $('.openAccordion').removeClass('openAccordion');
        $(this).addClass('openAccordion');
        $(this).closest('.container-accordion')
            .find('.content-add-task')
            .addClass('activeBurger');
    })
}

function initTabs() {
    $('.container-tabs-btn .tabs-link').on('click', function () {
        var tab_id = $(this).attr('data-tab');

        $('.container-tabs-btn .tabs-link').removeClass('current-t');
        $('.container-content').removeClass('current-t');
        $(this).addClass('current-t');
        $("#"+tab_id).addClass('current-t');
    });
}

function initMapsTask() {
    map = new OpenLayers.Map("mapsTask");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
    map.setCenter(new OpenLayers.LonLat(31.83, 51.0532)
        .transform(
            new OpenLayers.Projection("EPSG:4326"),
            new OpenLayers.Projection("EPSG:900913")
        ), 10
    );
    var layerMarkers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(layerMarkers);
    map.events.register('click', map, function (e) {
        var size = new OpenLayers.Size(21, 25);
        var offset = new OpenLayers.Pixel(-(size.w / 2), -size.h);
        var icon = new OpenLayers.Icon('/Images/smilies.png', size, offset);
        layerMarkers.addMarker(
            new OpenLayers.Marker(map.getLonLatFromViewPortPx(e.xy),
                icon));
    });
}

function initTabsChat() {
    $('.container-tab-btn .tabs-link').on('click', function () {
        var tab_id = $(this).attr('data-tabs');

        $('.container-tab-btn .tabs-link').removeClass('current-t');
        $('.container-content-tabs').removeClass('current-t');
        $(this).addClass('current-t');
        $("#"+tab_id).addClass('current-t');
    });
}

function initAccordionBrigade() {
    $('.btnAccordTable').on('click', function () {
        if($(this).hasClass('openAccord')){
            $('.btn-accordion-table').removeClass('openAccord');
            $('.table-accordion-list').hide();
            $(this).closest('.table-accordion-link').next('.table-accordion-list').hide();
        } else {
            $('.btn-accordion-table').removeClass('openAccord');
            $(this).addClass('openAccord');
            $('.table-accordion-list').hide();
            $(this).closest('.table-accordion-link').next('.table-accordion-list').show();
        }
    })
}

function initResizeBlock() {
    $('.btnResize').on('click', function () {
        if($(this).hasClass('open-resize')){
            $(this).removeClass('open-resize');
            $('.container-object-group').css({
                'width': '28%',
                'position': 'relative'
            })
        } else {
            $(this).addClass('open-resize');
            $('.container-object-group').css({
                'width': '100%',
                'position': 'absolute'
            })
        }
    })
}

function initAccordionGroup() {
    $('.container-accordion-group [data-accordion]').accordion({
        singleOpen: false
    });
}

function initAccordionRoles() {
    $('.btnAccordionRoles').on('click', function () {
        $('.content-roles').hide();
        $('.openAccordion').removeClass('openAccordion');
        $(this).addClass('openAccordion');
        $(this).closest('.block-roles')
            .find('.content-roles')
            .show();
    });
}

function initSliderCalendar() {
    $('.block-slider-calendar').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initStatus();
    initFilterA();
    initFilterT();
    initTooltip();
    initStatusTask();
    initAccordionTask();
    initAccordionBrigade();
    initTabs();
    initTabsChat();
    initExport();
    initBrigadeEdit();
    initPopup();
    initResizeBlock();
    initAccordionGroup();
    initAccordionRoles();
    initSliderCalendar();
});