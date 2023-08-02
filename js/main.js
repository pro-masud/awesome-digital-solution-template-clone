(function($){

/**
 * preloader 
 * 
 * 
    */
    $(window).ready(function () {
        $("#preloader").delay(100).fadeOut("fade");
    });




    // header nav affix class add and remove 

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
    
        if (scroll < 2) {
          $("nav.sticky-header").removeClass("affix");
        } else {
          $("nav.sticky-header").addClass("affix");
        }
    });


    //integration bootstrap tooltip 

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });




})(jQuery)