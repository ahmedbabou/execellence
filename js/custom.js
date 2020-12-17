/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    //Add class Active
	
	$(".navbar-default li a").click(function () {
		$(this).parent().addClass('active').siblings().removeClass();
	});
    
    // smooth scroll
	$('.navbar-default li a').click(function () {
		$('html, body').animate({
			scrollTop : $('#' + $(this).data('value')).offset().top
		}, 1000);
		//console.log($(this).data('value'));
	});

    var scroll = $("#scroll-top");
    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scroll.show() : scroll.hide();
    });

    scroll.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });


});