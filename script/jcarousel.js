(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');
        var move = 6;
        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();
                var margin;
                switch(width){
                  case 1170:
                    margin = 22;
                    move = 6;
                    break;
                  case 940:
                    margin = 40;
                    move = 5;
                    break;
                  case 724:
                    margin = 15;
                    move = 6;
                    break;
                  default:
                    icon_width = 0.25 * width;
                    fit = Math.floor(width/104);
                    icon_width = (1/fit) * width;
                    jcarousel.jcarousel('items').css('width', icon_width + 'px');
                    move = Math.floor(width/icon_width);
                    break;
                }
                console.log(move);
                jcarousel.jcarousel('items').css('margin-left', margin + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            })
            .jcarouselAutoscroll({
                interval: 6000,
                target: '+='+move,
                autostart: true
            });


        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-='+move
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+='+move
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: move,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
