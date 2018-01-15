function initStatus(){$(".btnListStatus").on("click",function(){$(this).hasClass("openStatus")?($(this).removeClass("openStatus"),$(".block-list-status_list").hide()):($(this).addClass("openStatus"),$(".block-list-status_list").show())})}function initFilterA(){$(".container-active-filter_title").on("click",function(){$(this).hasClass("openFilter")?($(this).removeClass("openFilter"),$(".block-active-filter-list").hide()):($(this).addClass("openFilter"),$(".block-active-filter-list").show())})}function initFilterT(){$(".btnFilterTask").on("click",function(){$(".block-filter-task-table").show()}),$(".btnCloseFilterTask").on("click",function(){$(".block-filter-task-table").hide()})}function initTooltip(){$(".tooltip-h[data-toggle=tooltip]").tooltip()}function initStatusTask(){$(".btnStatusTask").on("click",function(){$(this).hasClass("openStatusTask")?($(this).removeClass("openStatusTask"),$(".block-status-task").hide()):($(this).addClass("openStatusTask"),$(".block-status-task").show())})}function initBrigadeEdit(){$(".btnBrigadeE").on("click",function(){$(this).hasClass("closeBrigadeE")&&($(this).removeClass("closeBrigadeE"),$(".block-status-brigade").show())}),$(".btnPodmenu").on("click",function(){$(".block-podmenu").show()})}function initExport(){$(".btnExport").on("click",function(){$(this).hasClass("openExport")?($(this).removeClass("openExport"),$(".block-export").hide()):($(this).addClass("openExport"),$(".block-export").show())})}function initPopup(){$(".btnPopup").each(function(){var t=$(this),n=t.data("widthPopup");t.fancybox({padding:0,maxWidth:n,width:"100%",minWidth:n,autoHeight:!0,beforeShow:function(){$(".fancybox-inner").mCustomScrollbar(),$(".container-content").mCustomScrollbar(),t.is('[data-map="map-task"]')?initMapTask():t.is('[data-map="maps-task"]')&&initMapsTask()}})})}function initMapTask(){map=new OpenLayers.Map("mapTask");var t=new OpenLayers.Layer.OSM;map.addLayer(t),map.setCenter(new OpenLayers.LonLat(31.83,51.0532).transform(new OpenLayers.Projection("EPSG:4326"),new OpenLayers.Projection("EPSG:900913")),10);var n=new OpenLayers.Layer.Markers("Markers");map.addLayer(n),map.events.register("click",map,function(t){var i=new OpenLayers.Size(21,25),e=new OpenLayers.Pixel(-i.w/2,-i.h),a=new OpenLayers.Icon("/Images/smilies.png",i,e);n.addMarker(new OpenLayers.Marker(map.getLonLatFromViewPortPx(t.xy),a))})}function initAccordionTask(){$(".btnAccordion").on("click",function(){$(".activeBurger").removeClass("activeBurger"),$(".openAccordion").removeClass("openAccordion"),$(this).addClass("openAccordion"),$(this).closest(".container-accordion").find(".content-add-task").addClass("activeBurger")})}function initTabs(){$(".container-tabs-btn .tabs-link").on("click",function(){var t=$(this).attr("data-tab");$(".container-tabs-btn .tabs-link").removeClass("current-t"),$(".container-content").removeClass("current-t"),$(this).addClass("current-t"),$("#"+t).addClass("current-t")})}function initMapsTask(){map=new OpenLayers.Map("mapsTask");var t=new OpenLayers.Layer.OSM;map.addLayer(t),map.setCenter(new OpenLayers.LonLat(31.83,51.0532).transform(new OpenLayers.Projection("EPSG:4326"),new OpenLayers.Projection("EPSG:900913")),10);var n=new OpenLayers.Layer.Markers("Markers");map.addLayer(n),map.events.register("click",map,function(t){var i=new OpenLayers.Size(21,25),e=new OpenLayers.Pixel(-i.w/2,-i.h),a=new OpenLayers.Icon("/Images/smilies.png",i,e);n.addMarker(new OpenLayers.Marker(map.getLonLatFromViewPortPx(t.xy),a))})}function initTabsChat(){$(".container-tab-btn .tabs-link").on("click",function(){var t=$(this).attr("data-tabs");$(".container-tab-btn .tabs-link").removeClass("current-t"),$(".container-content-tabs").removeClass("current-t"),$(this).addClass("current-t"),$("#"+t).addClass("current-t")})}function initAccordionBrigade(){$(".btnAccordTable").on("click",function(){$(this).hasClass("openAccord")?($(".btn-accordion-table").removeClass("openAccord"),$(".table-accordion-list").hide(),$(this).closest(".table-accordion-link").next(".table-accordion-list").hide()):($(".btn-accordion-table").removeClass("openAccord"),$(this).addClass("openAccord"),$(".table-accordion-list").hide(),$(this).closest(".table-accordion-link").next(".table-accordion-list").show())})}function initResizeBlock(){$(".btnResize").on("click",function(){$(this).hasClass("open-resize")?($(this).removeClass("open-resize"),$(".container-object-group").css({width:"28%",position:"relative"})):($(this).addClass("open-resize"),$(".container-object-group").css({width:"100%",position:"absolute"}))})}function initAccordionGroup(){$(".container-accordion-group [data-accordion]").accordion({singleOpen:!1})}function initAccordionRoles(){$(".btnAccordionRoles").on("click",function(){$(".content-roles").hide(),$(".openAccordion").removeClass("openAccordion"),$(this).addClass("openAccordion"),$(this).closest(".block-roles").find(".content-roles").show()})}function initSliderCalendar(){$(".block-slider-calendar").slick({infinite:!0,slidesToShow:4,slidesToScroll:1})}document.addEventListener("DOMContentLoaded",function(){initStatus(),initFilterA(),initFilterT(),initTooltip(),initStatusTask(),initAccordionTask(),initAccordionBrigade(),initTabs(),initTabsChat(),initExport(),initBrigadeEdit(),initPopup(),initResizeBlock(),initAccordionGroup(),initAccordionRoles(),initSliderCalendar()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suanMiXSwibmFtZXMiOlsiaW5pdFN0YXR1cyIsIiQiLCJvbiIsInRoaXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImFkZENsYXNzIiwic2hvdyIsImluaXRGaWx0ZXJBIiwiaW5pdEZpbHRlclQiLCJpbml0VG9vbHRpcCIsInRvb2x0aXAiLCJpbml0U3RhdHVzVGFzayIsImluaXRCcmlnYWRlRWRpdCIsImluaXRFeHBvcnQiLCJpbml0UG9wdXAiLCJlYWNoIiwiJHBvcHVwIiwid2lkdGhQb3B1cCIsImRhdGEiLCJmYW5jeWJveCIsInBhZGRpbmciLCJtYXhXaWR0aCIsIndpZHRoIiwibWluV2lkdGgiLCJhdXRvSGVpZ2h0IiwiYmVmb3JlU2hvdyIsIm1DdXN0b21TY3JvbGxiYXIiLCJpcyIsImluaXRNYXBUYXNrIiwiaW5pdE1hcHNUYXNrIiwibWFwIiwiT3BlbkxheWVycyIsIk1hcCIsIm1hcG5payIsIkxheWVyIiwiT1NNIiwiYWRkTGF5ZXIiLCJzZXRDZW50ZXIiLCJMb25MYXQiLCJ0cmFuc2Zvcm0iLCJQcm9qZWN0aW9uIiwibGF5ZXJNYXJrZXJzIiwiTWFya2VycyIsImV2ZW50cyIsInJlZ2lzdGVyIiwiZSIsInNpemUiLCJTaXplIiwib2Zmc2V0IiwiUGl4ZWwiLCJ3IiwiaCIsImljb24iLCJJY29uIiwiYWRkTWFya2VyIiwiTWFya2VyIiwiZ2V0TG9uTGF0RnJvbVZpZXdQb3J0UHgiLCJ4eSIsImluaXRBY2NvcmRpb25UYXNrIiwiY2xvc2VzdCIsImZpbmQiLCJpbml0VGFicyIsInRhYl9pZCIsImF0dHIiLCJpbml0VGFic0NoYXQiLCJpbml0QWNjb3JkaW9uQnJpZ2FkZSIsIm5leHQiLCJpbml0UmVzaXplQmxvY2siLCJjc3MiLCJwb3NpdGlvbiIsImluaXRBY2NvcmRpb25Hcm91cCIsImFjY29yZGlvbiIsInNpbmdsZU9wZW4iLCJpbml0QWNjb3JkaW9uUm9sZXMiLCJpbml0U2xpZGVyQ2FsZW5kYXIiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBLFFBQVNBLGNBQ0xDLEVBQUUsa0JBQWtCQyxHQUFHLFFBQVMsV0FDekJELEVBQUVFLE1BQU1DLFNBQVMsZUFDaEJILEVBQUVFLE1BQU1FLFlBQVksY0FDcEJKLEVBQUUsMkJBQTJCSyxTQUU3QkwsRUFBRUUsTUFBTUksU0FBUyxjQUNqQk4sRUFBRSwyQkFBMkJPLFVBS3pDLFFBQVNDLGVBQ0xSLEVBQUUsa0NBQWtDQyxHQUFHLFFBQVMsV0FDekNELEVBQUVFLE1BQU1DLFNBQVMsZUFDaEJILEVBQUVFLE1BQU1FLFlBQVksY0FDcEJKLEVBQUUsNkJBQTZCSyxTQUUvQkwsRUFBRUUsTUFBTUksU0FBUyxjQUNqQk4sRUFBRSw2QkFBNkJPLFVBSzNDLFFBQVNFLGVBQ0xULEVBQUUsa0JBQWtCQyxHQUFHLFFBQVMsV0FDNUJELEVBQUUsNEJBQTRCTyxTQUVsQ1AsRUFBRSx1QkFBdUJDLEdBQUcsUUFBUyxXQUNqQ0QsRUFBRSw0QkFBNEJLLFNBSXRDLFFBQVNLLGVBQ0xWLEVBQUUsbUNBQW1DVyxVQUd6QyxRQUFTQyxrQkFDTFosRUFBRSxrQkFBa0JDLEdBQUcsUUFBUyxXQUN6QkQsRUFBRUUsTUFBTUMsU0FBUyxtQkFDaEJILEVBQUVFLE1BQU1FLFlBQVksa0JBQ3BCSixFQUFFLHNCQUFzQkssU0FFeEJMLEVBQUVFLE1BQU1JLFNBQVMsa0JBQ2pCTixFQUFFLHNCQUFzQk8sVUFLcEMsUUFBU00sbUJBQ0xiLEVBQUUsZ0JBQWdCQyxHQUFHLFFBQVMsV0FDdkJELEVBQUVFLE1BQU1DLFNBQVMsbUJBQ2hCSCxFQUFFRSxNQUFNRSxZQUFZLGlCQUNwQkosRUFBRSx5QkFBeUJPLFVBR25DUCxFQUFFLGVBQWVDLEdBQUcsUUFBUyxXQUN6QkQsRUFBRSxrQkFBa0JPLFNBSTVCLFFBQVNPLGNBQ0xkLEVBQUUsY0FBY0MsR0FBRyxRQUFTLFdBQ3JCRCxFQUFF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QVMsY0FDQUMsY0FDQUMsY0FDQUUsaUJBQ0ErQyxvQkFDQU8sdUJBQ0FKLFdBQ0FHLGVBQ0FuRCxhQUNBRCxrQkFDQUUsWUFDQXFELGtCQUNBRyxxQkFDQUcscUJBQ0FDIiwiZmlsZSI6InRhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0U3RhdHVzKCkge1xyXG4gICAgJCgnLmJ0bkxpc3RTdGF0dXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnb3BlblN0YXR1cycpKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlblN0YXR1cycpO1xyXG4gICAgICAgICAgICAkKCcuYmxvY2stbGlzdC1zdGF0dXNfbGlzdCcpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuU3RhdHVzJyk7XHJcbiAgICAgICAgICAgICQoJy5ibG9jay1saXN0LXN0YXR1c19saXN0Jykuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRGaWx0ZXJBKCkge1xyXG4gICAgJCgnLmNvbnRhaW5lci1hY3RpdmUtZmlsdGVyX3RpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ29wZW5GaWx0ZXInKSl7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW5GaWx0ZXInKTtcclxuICAgICAgICAgICAgJCgnLmJsb2NrLWFjdGl2ZS1maWx0ZXItbGlzdCcpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuRmlsdGVyJyk7XHJcbiAgICAgICAgICAgICQoJy5ibG9jay1hY3RpdmUtZmlsdGVyLWxpc3QnKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEZpbHRlclQoKSB7XHJcbiAgICAkKCcuYnRuRmlsdGVyVGFzaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYmxvY2stZmlsdGVyLXRhc2stdGFibGUnKS5zaG93KCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5idG5DbG9zZUZpbHRlclRhc2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmJsb2NrLWZpbHRlci10YXNrLXRhYmxlJykuaGlkZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUb29sdGlwKCkge1xyXG4gICAgJCgnLnRvb2x0aXAtaFtkYXRhLXRvZ2dsZT10b29sdGlwXScpLnRvb2x0aXAoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFN0YXR1c1Rhc2soKSB7XHJcbiAgICAkKCcuYnRuU3RhdHVzVGFzaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdvcGVuU3RhdHVzVGFzaycpKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlblN0YXR1c1Rhc2snKTtcclxuICAgICAgICAgICAgJCgnLmJsb2NrLXN0YXR1cy10YXNrJykuaGlkZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW5TdGF0dXNUYXNrJyk7XHJcbiAgICAgICAgICAgICQoJy5ibG9jay1zdGF0dXMtdGFzaycpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QnJpZ2FkZUVkaXQoKSB7XHJcbiAgICAkKCcuYnRuQnJpZ2FkZUUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnY2xvc2VCcmlnYWRlRScpKXtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY2xvc2VCcmlnYWRlRScpO1xyXG4gICAgICAgICAgICAkKCcuYmxvY2stc3RhdHVzLWJyaWdhZGUnKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcuYnRuUG9kbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYmxvY2stcG9kbWVudScpLnNob3coKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRFeHBvcnQoKSB7XHJcbiAgICAkKCcuYnRuRXhwb3J0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ29wZW5FeHBvcnQnKSl7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW5FeHBvcnQnKTtcclxuICAgICAgICAgICAgJCgnLmJsb2NrLWV4cG9ydCcpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuRXhwb3J0Jyk7XHJcbiAgICAgICAgICAgICQoJy5ibG9jay1leHBvcnQnKS5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFBvcHVwKCkge1xyXG4gICAgJChcIi5idG5Qb3B1cFwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICRwb3B1cCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHdpZHRoUG9wdXAgPSAkcG9wdXAuZGF0YShcIndpZHRoUG9wdXBcIik7XHJcbiAgICAgICAgJHBvcHVwLmZhbmN5Ym94KHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgbWF4V2lkdGg6IHdpZHRoUG9wdXAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiB3aWR0aFBvcHVwLFxyXG4gICAgICAgICAgICBhdXRvSGVpZ2h0IDogdHJ1ZSxcclxuICAgICAgICAgICAgYmVmb3JlU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5mYW5jeWJveC1pbm5lclwiKS5tQ3VzdG9tU2Nyb2xsYmFyKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmNvbnRhaW5lci1jb250ZW50XCIpLm1DdXN0b21TY3JvbGxiYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmKCRwb3B1cC5pcygnW2RhdGEtbWFwPVwibWFwLXRhc2tcIl0nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdE1hcFRhc2soKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJHBvcHVwLmlzKCdbZGF0YS1tYXA9XCJtYXBzLXRhc2tcIl0nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdE1hcHNUYXNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TWFwVGFzaygpIHtcclxuICAgIG1hcCA9IG5ldyBPcGVuTGF5ZXJzLk1hcChcIm1hcFRhc2tcIik7XHJcbiAgICB2YXIgbWFwbmlrID0gbmV3IE9wZW5MYXllcnMuTGF5ZXIuT1NNKCk7XHJcbiAgICBtYXAuYWRkTGF5ZXIobWFwbmlrKTtcclxuICAgIG1hcC5zZXRDZW50ZXIobmV3IE9wZW5MYXllcnMuTG9uTGF0KDMxLjgzLCA1MS4wNTMyKVxyXG4gICAgICAgIC50cmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIG5ldyBPcGVuTGF5ZXJzLlByb2plY3Rpb24oXCJFUFNHOjQzMjZcIiksXHJcbiAgICAgICAgICAgIG5ldyBPcGVuTGF5ZXJzLlByb2plY3Rpb24oXCJFUFNHOjkwMDkxM1wiKVxyXG4gICAgICAgICksIDEwXHJcbiAgICApO1xyXG4gICAgdmFyIGxheWVyTWFya2VycyA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLk1hcmtlcnMoXCJNYXJrZXJzXCIpO1xyXG4gICAgbWFwLmFkZExheWVyKGxheWVyTWFya2Vycyk7XHJcbiAgICBtYXAuZXZlbnRzLnJlZ2lzdGVyKCdjbGljaycsIG1hcCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgc2l6ZSA9IG5ldyBPcGVuTGF5ZXJzLlNpemUoMjEsIDI1KTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gbmV3IE9wZW5MYXllcnMuUGl4ZWwoLShzaXplLncgLyAyKSwgLXNpemUuaCk7XHJcbiAgICAgICAgdmFyIGljb24gPSBuZXcgT3BlbkxheWVycy5JY29uKCcvSW1hZ2VzL3NtaWxpZXMucG5nJywgc2l6ZSwgb2Zmc2V0KTtcclxuICAgICAgICBsYXllck1hcmtlcnMuYWRkTWFya2VyKFxyXG4gICAgICAgICAgICBuZXcgT3BlbkxheWVycy5NYXJrZXIobWFwLmdldExvbkxhdEZyb21WaWV3UG9ydFB4KGUueHkpLFxyXG4gICAgICAgICAgICAgICAgaWNvbikpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRBY2NvcmRpb25UYXNrKCkge1xyXG4gICAgJCgnLmJ0bkFjY29yZGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuYWN0aXZlQnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZUJ1cmdlcicpO1xyXG4gICAgICAgICQoJy5vcGVuQWNjb3JkaW9uJykucmVtb3ZlQ2xhc3MoJ29wZW5BY2NvcmRpb24nKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuQWNjb3JkaW9uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY29udGFpbmVyLWFjY29yZGlvbicpXHJcbiAgICAgICAgICAgIC5maW5kKCcuY29udGVudC1hZGQtdGFzaycpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlQnVyZ2VyJyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0VGFicygpIHtcclxuICAgICQoJy5jb250YWluZXItdGFicy1idG4gLnRhYnMtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGFiX2lkID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhYicpO1xyXG5cclxuICAgICAgICAkKCcuY29udGFpbmVyLXRhYnMtYnRuIC50YWJzLWxpbmsnKS5yZW1vdmVDbGFzcygnY3VycmVudC10Jyk7XHJcbiAgICAgICAgJCgnLmNvbnRhaW5lci1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdCcpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtdCcpO1xyXG4gICAgICAgICQoXCIjXCIrdGFiX2lkKS5hZGRDbGFzcygnY3VycmVudC10Jyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcHNUYXNrKCkge1xyXG4gICAgbWFwID0gbmV3IE9wZW5MYXllcnMuTWFwKFwibWFwc1Rhc2tcIik7XHJcbiAgICB2YXIgbWFwbmlrID0gbmV3IE9wZW5MYXllcnMuTGF5ZXIuT1NNKCk7XHJcbiAgICBtYXAuYWRkTGF5ZXIobWFwbmlrKTtcclxuICAgIG1hcC5zZXRDZW50ZXIobmV3IE9wZW5MYXllcnMuTG9uTGF0KDMxLjgzLCA1MS4wNTMyKVxyXG4gICAgICAgIC50cmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIG5ldyBPcGVuTGF5ZXJzLlByb2plY3Rpb24oXCJFUFNHOjQzMjZcIiksXHJcbiAgICAgICAgICAgIG5ldyBPcGVuTGF5ZXJzLlByb2plY3Rpb24oXCJFUFNHOjkwMDkxM1wiKVxyXG4gICAgICAgICksIDEwXHJcbiAgICApO1xyXG4gICAgdmFyIGxheWVyTWFya2VycyA9IG5ldyBPcGVuTGF5ZXJzLkxheWVyLk1hcmtlcnMoXCJNYXJrZXJzXCIpO1xyXG4gICAgbWFwLmFkZExheWVyKGxheWVyTWFya2Vycyk7XHJcbiAgICBtYXAuZXZlbnRzLnJlZ2lzdGVyKCdjbGljaycsIG1hcCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgc2l6ZSA9IG5ldyBPcGVuTGF5ZXJzLlNpemUoMjEsIDI1KTtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gbmV3IE9wZW5MYXllcnMuUGl4ZWwoLShzaXplLncgLyAyKSwgLXNpemUuaCk7XHJcbiAgICAgICAgdmFyIGljb24gPSBuZXcgT3BlbkxheWVycy5JY29uKCcvSW1hZ2VzL3NtaWxpZXMucG5nJywgc2l6ZSwgb2Zmc2V0KTtcclxuICAgICAgICBsYXllck1hcmtlcnMuYWRkTWFya2VyKFxyXG4gICAgICAgICAgICBuZXcgT3BlbkxheWVycy5NYXJrZXIobWFwLmdldExvbkxhdEZyb21WaWV3UG9ydFB4KGUueHkpLFxyXG4gICAgICAgICAgICAgICAgaWNvbikpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUYWJzQ2hhdCgpIHtcclxuICAgICQoJy5jb250YWluZXItdGFiLWJ0biAudGFicy1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0YWJfaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFicycpO1xyXG5cclxuICAgICAgICAkKCcuY29udGFpbmVyLXRhYi1idG4gLnRhYnMtbGluaycpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXQnKTtcclxuICAgICAgICAkKCcuY29udGFpbmVyLWNvbnRlbnQtdGFicycpLnJlbW92ZUNsYXNzKCdjdXJyZW50LXQnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjdXJyZW50LXQnKTtcclxuICAgICAgICAkKFwiI1wiK3RhYl9pZCkuYWRkQ2xhc3MoJ2N1cnJlbnQtdCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRBY2NvcmRpb25CcmlnYWRlKCkge1xyXG4gICAgJCgnLmJ0bkFjY29yZFRhYmxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ29wZW5BY2NvcmQnKSl7XHJcbiAgICAgICAgICAgICQoJy5idG4tYWNjb3JkaW9uLXRhYmxlJykucmVtb3ZlQ2xhc3MoJ29wZW5BY2NvcmQnKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLWFjY29yZGlvbi1saXN0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy50YWJsZS1hY2NvcmRpb24tbGluaycpLm5leHQoJy50YWJsZS1hY2NvcmRpb24tbGlzdCcpLmhpZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuYnRuLWFjY29yZGlvbi10YWJsZScpLnJlbW92ZUNsYXNzKCdvcGVuQWNjb3JkJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW5BY2NvcmQnKTtcclxuICAgICAgICAgICAgJCgnLnRhYmxlLWFjY29yZGlvbi1saXN0JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy50YWJsZS1hY2NvcmRpb24tbGluaycpLm5leHQoJy50YWJsZS1hY2NvcmRpb24tbGlzdCcpLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UmVzaXplQmxvY2soKSB7XHJcbiAgICAkKCcuYnRuUmVzaXplJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ29wZW4tcmVzaXplJykpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuLXJlc2l6ZScpO1xyXG4gICAgICAgICAgICAkKCcuY29udGFpbmVyLW9iamVjdC1ncm91cCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMjglJyxcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvcGVuLXJlc2l6ZScpO1xyXG4gICAgICAgICAgICAkKCcuY29udGFpbmVyLW9iamVjdC1ncm91cCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEFjY29yZGlvbkdyb3VwKCkge1xyXG4gICAgJCgnLmNvbnRhaW5lci1hY2NvcmRpb24tZ3JvdXAgW2RhdGEtYWNjb3JkaW9uXScpLmFjY29yZGlvbih7XHJcbiAgICAgICAgc2luZ2xlT3BlbjogZmFsc2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QWNjb3JkaW9uUm9sZXMoKSB7XHJcbiAgICAkKCcuYnRuQWNjb3JkaW9uUm9sZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmNvbnRlbnQtcm9sZXMnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLm9wZW5BY2NvcmRpb24nKS5yZW1vdmVDbGFzcygnb3BlbkFjY29yZGlvbicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW5BY2NvcmRpb24nKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5ibG9jay1yb2xlcycpXHJcbiAgICAgICAgICAgIC5maW5kKCcuY29udGVudC1yb2xlcycpXHJcbiAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFNsaWRlckNhbGVuZGFyKCkge1xyXG4gICAgJCgnLmJsb2NrLXNsaWRlci1jYWxlbmRhcicpLnNsaWNrKHtcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaW5pdFN0YXR1cygpO1xyXG4gICAgaW5pdEZpbHRlckEoKTtcclxuICAgIGluaXRGaWx0ZXJUKCk7XHJcbiAgICBpbml0VG9vbHRpcCgpO1xyXG4gICAgaW5pdFN0YXR1c1Rhc2soKTtcclxuICAgIGluaXRBY2NvcmRpb25UYXNrKCk7XHJcbiAgICBpbml0QWNjb3JkaW9uQnJpZ2FkZSgpO1xyXG4gICAgaW5pdFRhYnMoKTtcclxuICAgIGluaXRUYWJzQ2hhdCgpO1xyXG4gICAgaW5pdEV4cG9ydCgpO1xyXG4gICAgaW5pdEJyaWdhZGVFZGl0KCk7XHJcbiAgICBpbml0UG9wdXAoKTtcclxuICAgIGluaXRSZXNpemVCbG9jaygpO1xyXG4gICAgaW5pdEFjY29yZGlvbkdyb3VwKCk7XHJcbiAgICBpbml0QWNjb3JkaW9uUm9sZXMoKTtcclxuICAgIGluaXRTbGlkZXJDYWxlbmRhcigpO1xyXG59KTsiXX0=
