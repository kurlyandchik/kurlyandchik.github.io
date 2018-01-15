!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,i,o){var n,s;this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(n="hover"==this.options.trigger?"mouseenter":"focus",s="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this))),this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,e,this.$element.data()),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)},leave:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)},show:function(){var t,e,i,o,n,s,h;if(this.hasContent()&&this.enabled){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,e=/in/.test(s),t.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),i=this.getPosition(e),o=t[0].offsetWidth,n=t[0].offsetHeight,e?s.split(" ")[1]:s){case"bottom":h={top:i.top+i.height,left:i.left+i.width/2-o/2};break;case"top":h={top:i.top-n,left:i.left+i.width/2-o/2};break;case"left":h={top:i.top+i.height/2-n/2,left:i.left-o};break;case"right":h={top:i.top+i.height/2-n/2,left:i.left+i.width}}t.offset(h).addClass(s).addClass("in")}},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){var e=this.tip();return e.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?function(){var i=setTimeout(function(){e.off(t.support.transition.end).detach()},500);e.one(t.support.transition.end,function(){clearTimeout(i),e.detach()})}():e.detach(),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(e){return t.extend({},e?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);i[i.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("tooltip"),s="object"==typeof i&&i;n||o.data("tooltip",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAtdG9vbHRpcC5qcyJdLCJuYW1lcyI6WyIkIiwiVG9vbHRpcCIsImVsZW1lbnQiLCJvcHRpb25zIiwidGhpcyIsImluaXQiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsInR5cGUiLCJldmVudEluIiwiZXZlbnRPdXQiLCIkZWxlbWVudCIsImdldE9wdGlvbnMiLCJlbmFibGVkIiwidHJpZ2dlciIsIm9uIiwic2VsZWN0b3IiLCJwcm94eSIsInRvZ2dsZSIsImVudGVyIiwibGVhdmUiLCJfb3B0aW9ucyIsImV4dGVuZCIsImZpeFRpdGxlIiwiZm4iLCJkZWZhdWx0cyIsImRhdGEiLCJkZWxheSIsInNob3ciLCJoaWRlIiwiZSIsInNlbGYiLCJjdXJyZW50VGFyZ2V0IiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsImhvdmVyU3RhdGUiLCJzZXRUaW1lb3V0IiwiJHRpcCIsImluc2lkZSIsInBvcyIsImFjdHVhbFdpZHRoIiwiYWN0dWFsSGVpZ2h0IiwicGxhY2VtZW50IiwidHAiLCJoYXNDb250ZW50IiwidGlwIiwic2V0Q29udGVudCIsImFuaW1hdGlvbiIsImFkZENsYXNzIiwiY2FsbCIsInRlc3QiLCJkZXRhY2giLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiZGlzcGxheSIsImluc2VydEFmdGVyIiwiZ2V0UG9zaXRpb24iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNwbGl0IiwiaGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXQiLCJ0aXRsZSIsImdldFRpdGxlIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsInN1cHBvcnQiLCJ0cmFuc2l0aW9uIiwiaGFzQ2xhc3MiLCJvZmYiLCJlbmQiLCJvbmUiLCIkZSIsImF0dHIiLCJvIiwidGVtcGxhdGUiLCJ2YWxpZGF0ZSIsInBhcmVudE5vZGUiLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRlc3Ryb3kiLCJyZW1vdmVEYXRhIiwib2xkIiwidG9vbHRpcCIsIm9wdGlvbiIsImVhY2giLCIkdGhpcyIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIndpbmRvdyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkNBcUJDLFNBQVVBLEdBRVQsWUFNQSxJQUFJQyxHQUFVLFNBQVVDLEVBQVNDLEdBQy9CQyxLQUFLQyxLQUFLLFVBQVdILEVBQVNDLEdBR2hDRixHQUFRSyxXQUVOQyxZQUFhTixFQUViSSxLQUFNLFNBQVVHLEVBQU1OLEVBQVNDLEdBQzdCLEdBQUlNLEdBQ0FDLENBRUpOLE1BQUtJLEtBQU9BLEVBQ1pKLEtBQUtPLFNBQVdYLEVBQUVFLEdBQ2xCRSxLQUFLRCxRQUFVQyxLQUFLUSxXQUFXVCxHQUMvQkMsS0FBS1MsU0FBVSxFQUVhLFNBQXhCVCxLQUFLRCxRQUFRVyxRQUNmVixLQUFLTyxTQUFTSSxHQUFHLFNBQVdYLEtBQUtJLEtBQU1KLEtBQUtELFFBQVFhLFNBQVVoQixFQUFFaUIsTUFBTWIsS0FBS2MsT0FBUWQsT0FDbEQsVUFBeEJBLEtBQUtELFFBQVFXLFVBQ3RCTCxFQUFrQyxTQUF4QkwsS0FBS0QsUUFBUVcsUUFBcUIsYUFBZSxRQUMzREosRUFBbUMsU0FBeEJOLEtBQUtELFFBQVFXLFFBQXFCLGFBQWUsT0FDNURWLEtBQUtPLFNBQVNJLEdBQUdOLEVBQVUsSUFBTUwsS0FBS0ksS0FBTUosS0FBS0QsUUFBUWEsU0FBVWhCLEVBQUVpQixNQUFNYixLQUFLZSxNQUFPZixPQUN2RkEsS0FBS08sU0FBU0ksR0FBR0wsRUFBVyxJQUFNTixLQUFLSSxLQUFNSixLQUFLRCxRQUFRYSxTQUFVaEIsRUFBRWlCLE1BQU1iLEtBQUtnQixNQUFPaEIsUUFHMUZBLEtBQUtELFFBQVFhLFNBQ1ZaLEtBQUtpQixTQUFXckIsRUFBRXNCLFVBQVdsQixLQUFLRCxTQUFXVyxRQUFTLFNBQVVFLFNBQVUsS0FDM0VaLEtBQUttQixZQUdUWCxXQUFZLFNBQVVULEdBVXBCLE1BVEFBLEdBQVVILEVBQUVzQixVQUFXdEIsRUFBRXdCLEdBQUdwQixLQUFLSSxNQUFNaUIsU0FB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LFdBQ043RSxLQUFLUyxTQUFVLEdBR2pCcUUsUUFBUyxXQUNQOUUsS0FBS1MsU0FBVSxHQUdqQnNFLGNBQWUsV0FDYi9FLEtBQUtTLFNBQVdULEtBQUtTLFNBR3ZCSyxPQUFRLFNBQVVZLEdBQ2hCLEdBQUlDLEdBQU8vQixFQUFFOEIsRUFBRUUsZUFBZTVCLEtBQUtJLE1BQU1KLEtBQUtpQixVQUFVSyxLQUFLdEIsS0FBS0ksS0FDbEV1QixHQUFLQSxFQUFLYyxNQUFNMEIsU0FBUyxNQUFRLE9BQVMsV0FHNUNhLFFBQVMsV0FDUGhGLEtBQUt5QixPQUFPbEIsU0FBUzZELElBQUksSUFBTXBFLEtBQUtJLE1BQU02RSxXQUFXakYsS0FBS0ksT0FTOUQsSUFBSThFLEdBQU10RixFQUFFd0IsR0FBRytELE9BRWZ2RixHQUFFd0IsR0FBRytELFFBQVUsU0FBV0MsR0FDeEIsTUFBT3BGLE1BQUtxRixLQUFLLFdBQ2YsR0FBSUMsR0FBUTFGLEVBQUVJLE1BQ1ZzQixFQUFPZ0UsRUFBTWhFLEtBQUssV0FDbEJ2QixFQUEyQixnQkFBVnFGLElBQXNCQSxDQUN0QzlELElBQU1nRSxFQUFNaEUsS0FBSyxVQUFZQSxFQUFPLEdBQUl6QixHQUFRRyxLQUFNRCxJQUN0QyxnQkFBVnFGLElBQW9COUQsRUFBSzhELFFBSXhDeEYsRUFBRXdCLEdBQUcrRCxRQUFRSSxZQUFjMUYsRUFFM0JELEVBQUV3QixHQUFHK0QsUUFBUTlELFVBQ1hzQixXQUFXLEVBQ1hMLFVBQVcsTUFDWDFCLFVBQVUsRUFDVjhELFNBQVUsZ0dBQ1ZoRSxRQUFTLFFBQ1RrRCxNQUFPLEdBQ1ByQyxNQUFPLEVBQ1B3QyxNQUFNLEdBT1JuRSxFQUFFd0IsR0FBRytELFFBQVFLLFdBQWEsV0FFeEIsTUFEQTVGLEdBQUV3QixHQUFHK0QsUUFBVUQsRUFDUmxGLE9BR1R5RixPQUFPQyIsImZpbGUiOiJsaWIvYm9vdHN0cmFwLXRvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogYm9vdHN0cmFwLXRvb2x0aXAuanMgdjIuMi4yXG4gKiBodHRwOi8vdHdpdHRlci5naXRodWIuY29tL2Jvb3RzdHJhcC9qYXZhc2NyaXB0Lmh0bWwjdG9vbHRpcHNcbiAqIEluc3BpcmVkIGJ5IHRoZSBvcmlnaW5hbCBqUXVlcnkudGlwc3kgYnkgSmFzb24gRnJhbWVcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMiBUd2l0dGVyLCBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuIWZ1bmN0aW9uICgkKSB7XG5cbiAgXCJ1c2Ugc3RyaWN0XCI7IC8vIGpzaGludCA7XztcblxuXG4gLyogVE9PTFRJUCBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuICB2YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5pbml0KCd0b29sdGlwJywgZWxlbWVudCwgb3B0aW9ucylcbiAgfVxuXG4gIFRvb2x0aXAucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3I6IFRvb2x0aXBcblxuICAsIGluaXQ6IGZ1bmN0aW9uICh0eXBlLCBlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICB2YXIgZXZlbnRJblxuICAgICAgICAsIGV2ZW50T3V0XG5cbiAgICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpXG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMob3B0aW9ucylcbiAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50cmlnZ2VyID09ICdjbGljaycpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMudG9nZ2xlLCB0aGlzKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnRyaWdnZXIgIT0gJ21hbnVhbCcpIHtcbiAgICAgICAgZXZlbnRJbiA9IHRoaXMub3B0aW9ucy50cmlnZ2VyID09ICdob3ZlcicgPyAnbW91c2VlbnRlcicgOiAnZm9jdXMnXG4gICAgICAgIGV2ZW50T3V0ID0gdGhpcy5vcHRpb25zLnRyaWdnZXIgPT0gJ2hvdmVyJyA/ICdtb3VzZWxlYXZlJyA6ICdibHVyJ1xuICAgICAgICB0aGlzLiRlbGVtZW50Lm9uKGV2ZW50SW4gKyAnLicgKyB0aGlzLnR5cGUsIHRoaXMub3B0aW9ucy5zZWxlY3RvciwgJC5wcm94eSh0aGlzLmVudGVyLCB0aGlzKSlcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbihldmVudE91dCArICcuJyArIHRoaXMudHlwZSwgdGhpcy5vcHRpb25zLnNlbGVjdG9yLCAkLnByb3h5KHRoaXMubGVhdmUsIHRoaXMpKVxuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMuc2VsZWN0b3IgP1xuICAgICAgICAodGhpcy5fb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIHsgdHJpZ2dlcjogJ21hbnVhbCcsIHNlbGVjdG9yOiAnJyB9KSkgOlxuICAgICAgICB0aGlzLmZpeFRpdGxlKClcbiAgICB9XG5cbiAgLCBnZXRPcHRpb25zOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkLmZuW3RoaXMudHlwZV0uZGVmYXVsdHMsIG9wdGlvbnMsIHRoaXMuJGVsZW1lbnQuZGF0YSgpKVxuXG4gICAgICBpZiAob3B0aW9ucy5kZWxheSAmJiB0eXBlb2Ygb3B0aW9ucy5kZWxheSA9PSAnbnVtYmVyJykge1xuICAgICAgICBvcHRpb25zLmRlbGF5ID0ge1xuICAgICAgICAgIHNob3c6IG9wdGlvbnMuZGVsYXlcbiAgICAgICAgLCBoaWRlOiBvcHRpb25zLmRlbGF5XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9XG5cbiAgLCBlbnRlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBzZWxmID0gJChlLmN1cnJlbnRUYXJnZXQpW3RoaXMudHlwZV0odGhpcy5fb3B0aW9ucykuZGF0YSh0aGlzLnR5cGUpXG5cbiAgICAgIGlmICghc2VsZi5vcHRpb25zLmRlbGF5IHx8ICFzZWxmLm9wdGlvbnMuZGVsYXkuc2hvdykgcmV0dXJuIHNlbGYuc2hvdygpXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICBzZWxmLmhvdmVyU3RhdGUgPSAnaW4nXG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc2VsZi5ob3ZlclN0YXRlID09ICdpbicpIHNlbGYuc2hvdygpXG4gICAgICB9LCBzZWxmLm9wdGlvbnMuZGVsYXkuc2hvdylcbiAgICB9XG5cbiAgLCBsZWF2ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBzZWxmID0gJChlLmN1cnJlbnRUYXJnZXQpW3RoaXMudHlwZV0odGhpcy5fb3B0aW9ucykuZGF0YSh0aGlzLnR5cGUpXG5cbiAgICAgIGlmICh0aGlzLnRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICBpZiAoIXNlbGYub3B0aW9ucy5kZWxheSB8fCAhc2VsZi5vcHRpb25zLmRlbGF5LmhpZGUpIHJldHVybiBzZWxmLmhpZGUoKVxuXG4gICAgICBzZWxmLmhvdmVyU3RhdGUgPSAnb3V0J1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNlbGYuaG92ZXJTdGF0ZSA9PSAnb3V0Jykgc2VsZi5oaWRlKClcbiAgICAgIH0sIHNlbGYub3B0aW9ucy5kZWxheS5oaWRlKVxuICAgIH1cblxuICAsIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGlwXG4gICAgICAgICwgaW5zaWRlXG4gICAgICAgICwgcG9zXG4gICAgICAgICwgYWN0dWFsV2lkdGhcbiAgICAgICAgLCBhY3R1YWxIZWlnaHRcbiAgICAgICAgLCBwbGFjZW1lbnRcbiAgICAgICAgLCB0cFxuXG4gICAgICBpZiAodGhpcy5oYXNDb250ZW50KCkgJiYgdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICR0aXAgPSB0aGlzLnRpcCgpXG4gICAgICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICAkdGlwLmFkZENsYXNzKCdmYWRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLm9wdGlvbnMucGxhY2VtZW50ID09ICdmdW5jdGlvbicgP1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLCAkdGlwWzBdLCB0aGlzLiRlbGVtZW50WzBdKSA6XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnBsYWNlbWVudFxuXG4gICAgICAgIGluc2lkZSA9IC9pbi8udGVzdChwbGFjZW1lbnQpXG5cbiAgICAgICAgJHRpcFxuICAgICAgICAgIC5kZXRhY2goKVxuICAgICAgICAgIC5jc3MoeyB0b3A6IDAsIGxlZnQ6IDAsIGRpc3BsYXk6ICdibG9jaycgfSlcbiAgICAgICAgICAuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudClcblxuICAgICAgICBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGluc2lkZSlcblxuICAgICAgICBhY3R1YWxXaWR0aCA9ICR0aXBbMF0ub2Zmc2V0V2lkdGhcbiAgICAgICAgYWN0dWFsSGVpZ2h0ID0gJHRpcFswXS5vZmZzZXRIZWlnaHRcblxuICAgICAgICBzd2l0Y2ggKGluc2lkZSA/IHBsYWNlbWVudC5zcGxpdCgnICcpWzFdIDogcGxhY2VtZW50KSB7XG4gICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIHRwID0ge3RvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQsIGxlZnQ6IHBvcy5sZWZ0ICsgcG9zLndpZHRoIC8gMiAtIGFjdHVhbFdpZHRoIC8gMn1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHRwID0ge3RvcDogcG9zLnRvcCAtIGFjdHVhbEhlaWdodCwgbGVmdDogcG9zLmxlZnQgKyBwb3Mud2lkdGggLyAyIC0gYWN0dWFsV2lkdGggLyAyfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIHRwID0ge3RvcDogcG9zLnRvcCArIHBvcy5oZWlnaHQgLyAyIC0gYWN0dWFsSGVpZ2h0IC8gMiwgbGVmdDogcG9zLmxlZnQgLSBhY3R1YWxXaWR0aH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgdHAgPSB7dG9wOiBwb3MudG9wICsgcG9zLmhlaWdodCAvIDIgLSBhY3R1YWxIZWlnaHQgLyAyLCBsZWZ0OiBwb3MubGVmdCArIHBvcy53aWR0aH1cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAkdGlwXG4gICAgICAgICAgLm9mZnNldCh0cClcbiAgICAgICAgICAuYWRkQ2xhc3MocGxhY2VtZW50KVxuICAgICAgICAgIC5hZGRDbGFzcygnaW4nKVxuICAgICAgfVxuICAgIH1cblxuICAsIHNldENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGlwID0gdGhpcy50aXAoKVxuICAgICAgICAsIHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpXG5cbiAgICAgICR0aXAuZmluZCgnLnRvb2x0aXAtaW5uZXInKVt0aGlzLm9wdGlvbnMuaHRtbCA/ICdodG1sJyA6ICd0ZXh0J10odGl0bGUpXG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKCdmYWRlIGluIHRvcCBib3R0b20gbGVmdCByaWdodCcpXG4gICAgfVxuXG4gICwgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAgICwgJHRpcCA9IHRoaXMudGlwKClcblxuICAgICAgJHRpcC5yZW1vdmVDbGFzcygnaW4nKVxuXG4gICAgICBmdW5jdGlvbiByZW1vdmVXaXRoQW5pbWF0aW9uKCkge1xuICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICR0aXAub2ZmKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCkuZGV0YWNoKClcbiAgICAgICAgfSwgNTAwKVxuXG4gICAgICAgICR0aXAub25lKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICAgICR0aXAuZGV0YWNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kdGlwLmhhc0NsYXNzKCdmYWRlJykgP1xuICAgICAgICByZW1vdmVXaXRoQW5pbWF0aW9uKCkgOlxuICAgICAgICAkdGlwLmRldGFjaCgpXG5cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICwgZml4VGl0bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkZSA9IHRoaXMuJGVsZW1lbnRcbiAgICAgIGlmICgkZS5hdHRyKCd0aXRsZScpIHx8IHR5cGVvZigkZS5hdHRyKCdkYXRhLW9yaWdpbmFsLXRpdGxlJykpICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICRlLmF0dHIoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLCAkZS5hdHRyKCd0aXRsZScpIHx8ICcnKS5hdHRyKCd0aXRsZScsICcnKVxuICAgICAgfVxuICAgIH1cblxuICAsIGhhc0NvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRpdGxlKClcbiAgICB9XG5cbiAgLCBnZXRQb3NpdGlvbjogZnVuY3Rpb24gKGluc2lkZSkge1xuICAgICAgcmV0dXJuICQuZXh0ZW5kKHt9LCAoaW5zaWRlID8ge3RvcDogMCwgbGVmdDogMH0gOiB0aGlzLiRlbGVtZW50Lm9mZnNldCgpKSwge1xuICAgICAgICB3aWR0aDogdGhpcy4kZWxlbWVudFswXS5vZmZzZXRXaWR0aFxuICAgICAgLCBoZWlnaHQ6IHRoaXMuJGVsZW1lbnRbMF0ub2Zmc2V0SGVpZ2h0XG4gICAgICB9KVxuICAgIH1cblxuICAsIGdldFRpdGxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGl0bGVcbiAgICAgICAgLCAkZSA9IHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLCBvID0gdGhpcy5vcHRpb25zXG5cbiAgICAgIHRpdGxlID0gJGUuYXR0cignZGF0YS1vcmlnaW5hbC10aXRsZScpXG4gICAgICAgIHx8ICh0eXBlb2Ygby50aXRsZSA9PSAnZnVuY3Rpb24nID8gby50aXRsZS5jYWxsKCRlWzBdKSA6ICBvLnRpdGxlKVxuXG4gICAgICByZXR1cm4gdGl0bGVcbiAgICB9XG5cbiAgLCB0aXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiR0aXAgPSB0aGlzLiR0aXAgfHwgJCh0aGlzLm9wdGlvbnMudGVtcGxhdGUpXG4gICAgfVxuXG4gICwgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy4kZWxlbWVudFswXS5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgLCBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcbiAgICB9XG5cbiAgLCBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cblxuICAsIHRvZ2dsZUVuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZW5hYmxlZCA9ICF0aGlzLmVuYWJsZWRcbiAgICB9XG5cbiAgLCB0b2dnbGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VsZiA9ICQoZS5jdXJyZW50VGFyZ2V0KVt0aGlzLnR5cGVdKHRoaXMuX29wdGlvbnMpLmRhdGEodGhpcy50eXBlKVxuICAgICAgc2VsZltzZWxmLnRpcCgpLmhhc0NsYXNzKCdpbicpID8gJ2hpZGUnIDogJ3Nob3cnXSgpXG4gICAgfVxuXG4gICwgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5oaWRlKCkuJGVsZW1lbnQub2ZmKCcuJyArIHRoaXMudHlwZSkucmVtb3ZlRGF0YSh0aGlzLnR5cGUpXG4gICAgfVxuXG4gIH1cblxuXG4gLyogVE9PTFRJUCBQTFVHSU4gREVGSU5JVElPTlxuICAqID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuICB2YXIgb2xkID0gJC5mbi50b29sdGlwXG5cbiAgJC5mbi50b29sdGlwID0gZnVuY3Rpb24gKCBvcHRpb24gKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICwgZGF0YSA9ICR0aGlzLmRhdGEoJ3Rvb2x0aXAnKVxuICAgICAgICAsIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCd0b29sdGlwJywgKGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgJC5mbi50b29sdGlwLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuXG4gICQuZm4udG9vbHRpcC5kZWZhdWx0cyA9IHtcbiAgICBhbmltYXRpb246IHRydWVcbiAgLCBwbGFjZW1lbnQ6ICd0b3AnXG4gICwgc2VsZWN0b3I6IGZhbHNlXG4gICwgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nXG4gICwgdHJpZ2dlcjogJ2hvdmVyJ1xuICAsIHRpdGxlOiAnJ1xuICAsIGRlbGF5OiAwXG4gICwgaHRtbDogZmFsc2VcbiAgfVxuXG5cbiAvKiBUT09MVElQIE5PIENPTkZMSUNUXG4gICogPT09PT09PT09PT09PT09PT09PSAqL1xuXG4gICQuZm4udG9vbHRpcC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4udG9vbHRpcCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxufSh3aW5kb3cualF1ZXJ5KTsiXX0=
