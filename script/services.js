(function($) {
    $(function() {
        // fixing float style issue
        $('.sort').on("click",function(){
          if(!$(this).hasClass("active")){
            $(".service-info").hide();
          }
        });    
        $('#services').mixitup({
          targetSelector: '.service-info'
        });        


        // match service info height dynamically
        var $si_height = 0;
        $('.service-info-top').each(function(){
          if($(this).height() >= $si_height){
            $si_height = $(this).height();
          }
        });
        $('.service-info-top').css({'height':$si_height+'px'});
    });
})(jQuery);
