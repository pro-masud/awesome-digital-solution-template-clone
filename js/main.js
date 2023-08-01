(function($){

/**
 * preloader 
 * 
 * 
    */
    $(window).ready(function () {
        $("#preloader").delay(100).fadeOut("fade");
    });

    // 

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
    
        if (scroll < 2) {
          $("nav.sticky-header").removeClass("affix");
        } else {
          $("nav.sticky-header").addClass("affix");
        }
      });




})(jQuery)