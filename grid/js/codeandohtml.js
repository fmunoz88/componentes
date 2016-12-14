$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
        $('nav .logo').addClass('logo-shrink');
        $('nav .title-page').addClass('title-page-shrink');
    } else {
        $('nav').removeClass('shrink');
        $('nav .logo').removeClass('logo-shrink');
        $('nav .title-page').removeClass('title-page-shrink');
    }
});