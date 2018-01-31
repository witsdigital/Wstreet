$(function(){

  "use strict";

var target = $("#progress-target").offset().top;
var interval = setInterval(function() {
    if ($(window).scrollTop() >= target) {
        // do your animation
        $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
        clearInterval(interval);
    }
}, 200);

});