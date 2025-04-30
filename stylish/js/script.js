$(function() {
    $('.nav_toggle').click(function() {
        $('.open_nav').stop().animate({ right: '0' },50);
        $('.popup').show()
    });


    $('.close').click(function() {
       $('.popup').hide()
        $('.open_nav').animate({ right: '-120%' }, 100)
    });
});