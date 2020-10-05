/*global $*/

    // window height
    var windowH = $(window).height(),
        colorLi = $('.color-option .list-unstyled1 li'),
        fontLi = $('.color-option .list-unstyled2 li');
    
    // slider
    $('.slider').height(windowH);

$(".navbar-collapse ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
});
    
$(document).ready(function () {
    "use strict";
    $('html').niceScroll({
        cursorcolor: "#f00",
        cursorwidth: "15px",
        background: "rgba(20,20,20,0.3)",
        cursorborder: "1px solid#f00",
        cursorborderradius: "10px"
    });
});

 // option tools
    $('.option-box i').on('click', function () {
        $('.option-box .color-option').slideToggle(1000);
    });
        
    //change color theme
    colorLi
        .eq(0).css({backgroundColor: '#535353'}).end()
        .eq(1).css({backgroundColor: '#f00'}).end()
        .eq(2).css({backgroundColor: '#3985e5'}).end()
        .eq(3).css({backgroundColor: '#1fcfcc'});
    
    colorLi.click(function () {
        $('link[href*="theme"]').attr('href', $(this).attr("data-value"));  
    });

    //change color theme
  

   fontLi.on("click", function () {
       $('link[href*="family"]').attr('href', $(this).attr("data-value"));
       $(this).addClass("active").siblings().removeClass("active");
    });





















