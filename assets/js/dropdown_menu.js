 $(function() {

    "use strict";

 	var dropdownMobile = $(".dropdown_mobile");
 	var mobileMenu = $(".mobile_menu");
    
 mobileMenu.find('img').on("click", function() {
        dropdownMobile.slideToggle();

    });

 $(window).resize(function(){
    if ($(window).width() >= 992){  
        dropdownMobile.hide();
    }   
});

$('.closed').on("click", function(event) {
         dropdownMobile.hide();
});


});
