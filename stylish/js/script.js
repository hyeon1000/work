$(function() {
    //nav 클릭 시,
    $('.nav_toggle').click(function() {
        $('.open_nav').stop().animate({ right: '0' },50);
        $('.popup').show()
    });

//닫기 버튼 클릭 시,
    $('.close').click(function() {
       $('.popup').hide()
        $('.open_nav').animate({ right: '-120%' }, 100)
    });
});
