function initMenuPopup() {
    $('.btn-header-menu').on('click', function () {
        var dataId = $(this).attr('data-icon-menu');
        if($(this).hasClass('openMenu')){
            $(this).removeClass('openMenu');
            $('.container-menu-popup').css({
                'display': 'none'
            });
            $('.overflow').removeClass('openMenu');
        } else {
            $('.openMenu').removeClass('openMenu');
            $('.overflow').addClass('openMenu');
            $(this).addClass('openMenu');
            $('.menu-popup').css({'display': 'none'});
            $('.container-menu-popup')
                .css({'display': 'block'})
                .find('.menu-popup[data-menu-popup=' + dataId +']')
                .css({'display': 'block'})
                .find('.input-search-popup').focus();
            $('.input-search-popup_icon use').css({
                'fill': '#00b1ff'
            })
        }
    });
    $('.overflow').on('click', function () {
        $(this).removeClass('openMenu');
        $('.openMenu').removeClass('openMenu');
        $('.container-menu-popup').css({
            'display': 'none'
        });
    });
}

function initFocusSearch() {
    $('.input-search-popup_icon').on('click', function () {
        $('.input-search-popup').focus();
    });
}

function initСlearingSearch() {
    $('.btnCrossSearch').on('click', function () {
        $('.input-search-popup').val('');
    });
}

function initSelect() {

    $('select.gray-s').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
                $(this).closest('.block-select').find('.icon-select').css({
                    'z-index': '4'
                })
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
            $(this).closest('.block-select').find('.icon-select').css({
                'z-index': '6'
            })
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

}

(function($){
    $(window).on("load",function(){
        $(".block-table-filter-task").mCustomScrollbar({
            axis:"x"
        });
        $(".block-table-address").mCustomScrollbar({
            axis:"x"
        });
    });

})(jQuery);


document.addEventListener('DOMContentLoaded', function () {
    initMenuPopup();
    initFocusSearch();
    initСlearingSearch();
    initSelect();
});