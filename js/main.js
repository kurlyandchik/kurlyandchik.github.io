function initMenuPopup(){$(".btn-header-menu").on("click",function(){var e=$(this).attr("data-icon-menu");$(this).hasClass("openMenu")?($(this).removeClass("openMenu"),$(".container-menu-popup").css({display:"none"}),$(".overflow").removeClass("openMenu")):($(".openMenu").removeClass("openMenu"),$(".overflow").addClass("openMenu"),$(this).addClass("openMenu"),$(".menu-popup").css({display:"none"}),$(".container-menu-popup").css({display:"block"}).find(".menu-popup[data-menu-popup="+e+"]").css({display:"block"}).find(".input-search-popup").focus(),$(".input-search-popup_icon use").css({fill:"#00b1ff"}))}),$(".overflow").on("click",function(){$(this).removeClass("openMenu"),$(".openMenu").removeClass("openMenu"),$(".container-menu-popup").css({display:"none"})})}function initFocusSearch(){$(".input-search-popup_icon").on("click",function(){$(".input-search-popup").focus()})}function initСlearingSearch(){$(".btnCrossSearch").on("click",function(){$(".input-search-popup").val("")})}function initSelect(){$("select.gray-s").each(function(){var e=$(this),n=$(this).children("option").length;e.addClass("select-hidden"),e.wrap('<div class="select"></div>'),e.after('<div class="select-styled"></div>');var t=e.next("div.select-styled");t.text(e.children("option").eq(0).text());for(var i=$("<ul />",{class:"select-options"}).insertAfter(t),o=0;o<n;o++)$("<li />",{text:e.children("option").eq(o).text(),rel:e.children("option").eq(o).val()}).appendTo(i);var s=i.children("li");t.click(function(e){e.stopPropagation(),$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide(),$(this).closest(".block-select").find(".icon-select").css({"z-index":"4"})}),$(this).toggleClass("active").next("ul.select-options").toggle(),$(this).closest(".block-select").find(".icon-select").css({"z-index":"6"})}),s.click(function(n){n.stopPropagation(),t.text($(this).text()).removeClass("active"),e.val($(this).attr("rel")),i.hide()}),$(document).click(function(){t.removeClass("active"),i.hide()})})}!function(e){e(window).on("load",function(){e(".block-table-filter-task").mCustomScrollbar({axis:"x"})})}(jQuery),document.addEventListener("DOMContentLoaded",function(){initMenuPopup(),initFocusSearch(),initСlearingSearch(),initSelect()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdE1lbnVQb3B1cCIsIiQiLCJvbiIsImRhdGFJZCIsInRoaXMiLCJhdHRyIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNzcyIsImRpc3BsYXkiLCJhZGRDbGFzcyIsImZpbmQiLCJmb2N1cyIsImZpbGwiLCJpbml0Rm9jdXNTZWFyY2giLCJpbml00KFsZWFyaW5nU2VhcmNoIiwidmFsIiwiaW5pdFNlbGVjdCIsImVhY2giLCIkdGhpcyIsIm51bWJlck9mT3B0aW9ucyIsImNoaWxkcmVuIiwibGVuZ3RoIiwid3JhcCIsImFmdGVyIiwiJHN0eWxlZFNlbGVjdCIsIm5leHQiLCJ0ZXh0IiwiZXEiLCIkbGlzdCIsImNsYXNzIiwiaW5zZXJ0QWZ0ZXIiLCJpIiwicmVsIiwiYXBwZW5kVG8iLCIkbGlzdEl0ZW1zIiwiY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibm90IiwiaGlkZSIsImNsb3Nlc3QiLCJ6LWluZGV4IiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJkb2N1bWVudCIsIndpbmRvdyIsIm1DdXN0b21TY3JvbGxiYXIiLCJheGlzIiwialF1ZXJ5IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsUUFBU0EsaUJBQ0xDLEVBQUUsb0JBQW9CQyxHQUFHLFFBQVMsV0FDOUIsR0FBSUMsR0FBU0YsRUFBRUcsTUFBTUMsS0FBSyxpQkFDdkJKLEdBQUVHLE1BQU1FLFNBQVMsYUFDaEJMLEVBQUVHLE1BQU1HLFlBQVksWUFDcEJOLEVBQUUseUJBQXlCTyxLQUN2QkMsUUFBVyxTQUVmUixFQUFFLGFBQWFNLFlBQVksY0FFM0JOLEVBQUUsYUFBYU0sWUFBWSxZQUMzQk4sRUFBRSxhQUFhUyxTQUFTLFlBQ3hCVCxFQUFFRyxNQUFNTSxTQUFTLFlBQ2pCVCxFQUFFLGVBQWVPLEtBQUtDLFFBQVcsU0FDakNSLEVBQUUseUJBQ0dPLEtBQUtDLFFBQVcsVUFDaEJFLEtBQUssK0JBQWlDUixFQUFRLEtBQzlDSyxLQUFLQyxRQUFXLFVBQ2hCRSxLQUFLLHVCQUF1QkMsUUFDakNYLEVBQUUsZ0NBQWdDTyxLQUM5QkssS0FBUSxlQUlwQlosRUFBRSxhQUFhQyxHQUFHLFFBQVMsV0FDdkJELEVBQUVHLE1BQU1HLFlBQVksWUFDcEJOLEVBQUUsYUFBYU0sWUFBWSxZQUMzQk4sRUFBRSx5QkFBeUJPLEtBQ3ZCQyxRQUFXLFdBS3ZCLFFBQVNLLG1CQUNMYixFQUFFLDRCQUE0QkMsR0FBRyxRQUFTLFdBQ3RDRCxFQUFFLHVCQUF1QlcsVUFJakMsUUFBU0csc0JBQ0xkLEVBQUUsbUJBQW1CQyxHQUFHLFFBQVMsV0FDN0JELEVBQUUsdUJBQXVCZSxJQUFJLE1BSXJDLFFBQVNDLGNBRUxoQixFQUFFLGlCQUFpQmlCLEtBQUssV0FDcEIsR0FBSUMsR0FBUWxCLEVBQUVHLE1BQU9nQixFQUFrQm5CLEVBQUVHLE1BQU1pQixTQUFTLFVBQVVDLE1BRWxFSCxHQUFNVCxTQUFTLGlCQUNmUyxFQUFNSSxLQUFLLDhCQUNYSixFQUFNSyxNQUFNLG9DQUVaLElBQUlDLEdBQWdCTixFQUFNTyxLQUFLLG9CQUMvQkQsR0FBY0UsS0FBS1IsRUFBTUUsU0FBUyxVQUFVTyxHQUFHLEdBQUdELE9BTWxELEtBQUssR0FKREUsR0FBUTVCLEVBQUUsVUFDVjZCLE1BQVMsbUJBQ1ZDLFlBQVlOLEdBRU5PLEVBQUksRUFBR0EsRUFBSVosRUFBaUJZLElBQ2pDL0IsRUFBRSxVQUNFMEIsS0FBTVIsRUFBTUUsU0FBUyxVQUFVTyxHQUFHSSxHQUFHTCxPQUNyQ00sSUFBS2QsRUFBTUUsU0FBUyxVQUFVTyxHQUFHSSxHQUFHaEIsUUFDckNrQixTQUFTTCxFQUdoQixJQUFJTSxHQUFhTixFQUFNUixTQUFTLEtBRWhDSSxHQUFjVyxNQUFNLFNBQVNDLEdBQ3pCQSxFQUFFQyxrQkFDRnJDLEVBQUUsNEJBQTRCc0MsSUFBSW5DLE1BQU1jLEtBQUssV0FDekNqQixFQUFFRyxNQUFNRyxZQUFZLFVBQVVtQixLQUFLLHFCQUFxQmMsT0FDeER2QyxFQUFFRyxNQUFNcUMsUUFBUSxpQkFBaUI5QixLQUFLLGdCQUFnQkgsS0FDbERrQyxVQUFXLFFBR25CekMsRUFBRUcsTUFBTXVDLFlBQVksVUFBVWpCLEtBQUsscUJBQXFCa0IsU0FDeEQzQyxFQUFFRyxNQUFNcUMsUUFBUSxpQkFBaUI5QixLQUFLLGdCQUFnQkgsS0FDbERrQyxVQUFXLFFBSW5CUCxFQUFXQyxNQUFNLFNBQVNDLEdBQ3RCQSxFQUFFQyxrQkFDRmIsRUFBY0UsS0FBSzFCLEVBQUVHLE1BQU11QixRQUFRcEIsWUFBWSxVQUMvQ1ksRUFBTUgsSUFBSWYsRUFBRUcsTUFBTUMsS0FBSyxRQUN2QndCLEVBQU1XLFNBSVZ2QyxFQUFFNEMsVUFBVVQsTUFBTSxXQUNkWCxFQUFjbEIsWUFBWSxVQUMxQnNCLEVBQU1XLFlBT2xCLFNBQVV2QyxHQUNOQSxFQUFFNkMsUUFBUTVDLEdBQUcsT0FBTyxXQUNoQkQsRUFBRSw0QkFBNEI4QyxrQkFDMUJDLEtBQUssU0FJZEMsUUFHSEosU0FBU0ssaUJBQWlCLG1CQUFvQixXQUMxQ2xELGdCQUNBYyxrQkFDQUMscUJBQ0FFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0TWVudVBvcHVwKCkge1xyXG4gICAgJCgnLmJ0bi1oZWFkZXItbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGF0YUlkID0gJCh0aGlzKS5hdHRyKCdkYXRhLWljb24tbWVudScpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ29wZW5NZW51Jykpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuTWVudScpO1xyXG4gICAgICAgICAgICAkKCcuY29udGFpbmVyLW1lbnUtcG9wdXAnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy5vdmVyZmxvdycpLnJlbW92ZUNsYXNzKCdvcGVuTWVudScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5vcGVuTWVudScpLnJlbW92ZUNsYXNzKCdvcGVuTWVudScpO1xyXG4gICAgICAgICAgICAkKCcub3ZlcmZsb3cnKS5hZGRDbGFzcygnb3Blbk1lbnUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3Blbk1lbnUnKTtcclxuICAgICAgICAgICAgJCgnLm1lbnUtcG9wdXAnKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XHJcbiAgICAgICAgICAgICQoJy5jb250YWluZXItbWVudS1wb3B1cCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5tZW51LXBvcHVwW2RhdGEtbWVudS1wb3B1cD0nICsgZGF0YUlkICsnXScpXHJcbiAgICAgICAgICAgICAgICAuY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5pbnB1dC1zZWFyY2gtcG9wdXAnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAkKCcuaW5wdXQtc2VhcmNoLXBvcHVwX2ljb24gdXNlJykuY3NzKHtcclxuICAgICAgICAgICAgICAgICdmaWxsJzogJyMwMGIxZmYnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKCcub3ZlcmZsb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3Blbk1lbnUnKTtcclxuICAgICAgICAkKCcub3Blbk1lbnUnKS5yZW1vdmVDbGFzcygnb3Blbk1lbnUnKTtcclxuICAgICAgICAkKCcuY29udGFpbmVyLW1lbnUtcG9wdXAnKS5jc3Moe1xyXG4gICAgICAgICAgICAnZGlzcGxheSc6ICdub25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRGb2N1c1NlYXJjaCgpIHtcclxuICAgICQoJy5pbnB1dC1zZWFyY2gtcG9wdXBfaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuaW5wdXQtc2VhcmNoLXBvcHVwJykuZm9jdXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml00KFsZWFyaW5nU2VhcmNoKCkge1xyXG4gICAgJCgnLmJ0bkNyb3NzU2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5pbnB1dC1zZWFyY2gtcG9wdXAnKS52YWwoJycpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTZWxlY3QoKSB7XHJcblxyXG4gICAgJCgnc2VsZWN0LmdyYXktcycpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBudW1iZXJPZk9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdzZWxlY3QtaGlkZGVuJyk7XHJcbiAgICAgICAgJHRoaXMud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiPjwvZGl2PicpO1xyXG4gICAgICAgICR0aGlzLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2VsZWN0LXN0eWxlZFwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICB2YXIgJHN0eWxlZFNlbGVjdCA9ICR0aGlzLm5leHQoJ2Rpdi5zZWxlY3Qtc3R5bGVkJyk7XHJcbiAgICAgICAgJHN0eWxlZFNlbGVjdC50ZXh0KCR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcSgwKS50ZXh0KCkpO1xyXG5cclxuICAgICAgICB2YXIgJGxpc3QgPSAkKCc8dWwgLz4nLCB7XHJcbiAgICAgICAgICAgICdjbGFzcyc6ICdzZWxlY3Qtb3B0aW9ucydcclxuICAgICAgICB9KS5pbnNlcnRBZnRlcigkc3R5bGVkU2VsZWN0KTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgICAgICAgICAkKCc8bGkgLz4nLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudGV4dCgpLFxyXG4gICAgICAgICAgICAgICAgcmVsOiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudmFsKClcclxuICAgICAgICAgICAgfSkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyICRsaXN0SXRlbXMgPSAkbGlzdC5jaGlsZHJlbignbGknKTtcclxuXHJcbiAgICAgICAgJHN0eWxlZFNlbGVjdC5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICQoJ2Rpdi5zZWxlY3Qtc3R5bGVkLmFjdGl2ZScpLm5vdCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3Qtb3B0aW9ucycpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmJsb2NrLXNlbGVjdCcpLmZpbmQoJy5pY29uLXNlbGVjdCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnNCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3Qtb3B0aW9ucycpLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5ibG9jay1zZWxlY3QnKS5maW5kKCcuaWNvbi1zZWxlY3QnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnNidcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGxpc3RJdGVtcy5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICRzdHlsZWRTZWxlY3QudGV4dCgkKHRoaXMpLnRleHQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkdGhpcy52YWwoJCh0aGlzKS5hdHRyKCdyZWwnKSk7XHJcbiAgICAgICAgICAgICRsaXN0LmhpZGUoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygkdGhpcy52YWwoKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkc3R5bGVkU2VsZWN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJGxpc3QuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuKGZ1bmN0aW9uKCQpe1xyXG4gICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5ibG9jay10YWJsZS1maWx0ZXItdGFza1wiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgYXhpczpcInhcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpbml0TWVudVBvcHVwKCk7XHJcbiAgICBpbml0Rm9jdXNTZWFyY2goKTtcclxuICAgIGluaXTQoWxlYXJpbmdTZWFyY2goKTtcclxuICAgIGluaXRTZWxlY3QoKTtcclxufSk7Il19
