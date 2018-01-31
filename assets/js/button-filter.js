$(function(){

	"use strict";

	var filter = $('.filter-button');

filter.each(function(){
    $(this).on('click', function(){
        $(this).siblings().removeClass('active-button'); // if you want to remove class from all sibling buttons
        $(this).addClass('active-button');
    });
});

});