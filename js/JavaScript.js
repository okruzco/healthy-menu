$(document).ready(function () {
    $('.parallax').parallax();

    $(window).on('scroll.nekofixedmenu', function () {
            if ($(window).scrollTop() < 100) {
                $('#mainHeader').removeClass('fixedHeader');
                $('#mainHeader').css({
                    'display': 'block',
                    'margin-top': '0'
                });
            } else {
                if (!$('#mainHeader').hasClass('fixedHeader')) {
                    $('#mainHeader').animate(
						{ 'margin-top': '-400px' },
						0, function () {
						    $('#mainHeader').addClass('fixedHeader');

						    $('#mainHeader').animate(
								{ 'margin-top': '0' },
								500, 'easeInOutCirc', function () {
								});
						});
                }
        }
    });
    /* TO TOP BUTTON */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    


});