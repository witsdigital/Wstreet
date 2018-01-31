$(function(){

    "use strict";
    
    $('a[href^="#"]').on('click.smoothscroll',function (e) {
        e.preventDefault();
      
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-60
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});