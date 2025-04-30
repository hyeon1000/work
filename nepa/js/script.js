window.onload = function () {

  var visualSwiper = new Swiper(".visual_container", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop: true,
    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mySwiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var responsiveSwiper = new Swiper(".swiper_container", {
    slidesPerView: '1.1',
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: '3',
        spaceBetween: 10,
      },
    },
  });

  // 이미지 호버 효과
  $('.slide1').mouseenter(function () {
    $('.slide1 > a  img').attr('src', './images/best6.jpg');
  }).mouseleave(function () {
    $('.slide1 > a img').attr('src', './images/best6_1.jpg');
  });

  $('.slide2').mouseenter(function () {
    $('.slide2 > a img').attr('src', './images/best2_1.jpg');
  }).mouseleave(function () {
    $('.slide2 > a img').attr('src', './images/best2.jpg');
  });

  $('.slide3').mouseenter(function () {
    $('.slide3 > a img').attr('src', './images/best3.jpg');
  }).mouseleave(function () {
    $('.slide3 > a img').attr('src', './images/best3_1.jpg');
  });

  $('.slide4').mouseenter(function () {
    $('.slide4 > a img').attr('src', './images/best4.jpg');
  }).mouseleave(function () {
    $('.slide4 > a img').attr('src', './images/best4_1.jpg');
  });
  $('.slide5').mouseenter(function () {
    $('.slide5 > a img').attr('src', './images/best1.jpg');
  }).mouseleave(function () {
    $('.slide5 > a img').attr('src', './images/best1_2.jpg');
  });
  $('.slide6').mouseenter(function () {
    $('.slide6 > a img').attr('src', './images/best7.jpg');
  }).mouseleave(function () {
    $('.slide6 > a img').attr('src', './images/best7_2.jpg');
  });



  // 모바일 메뉴 버튼
  
  $('.mbbtn').click(function () {
    if ($(window).width() <= 768) { // 모바일일 때만 실행
      $('.mbbtn > span').toggleClass('on');
      $(this).toggleClass('active');
      $('.popup').toggle();
      $('.mb_nav').stop().toggleClass('on');
    }
    return false;
  });
  $(window).resize(function () {
    if ($(window).width() > 768) { // 모바일 해제된 경우
      $('.popup').hide(); // 화면 크기 커지면 팝업 숨기기
    }
  });
  

  $('.subnav_menu > li').click(function(e){
    e.preventDefault(); 

    $(this).find('.mbsub').stop().slideToggle();
  

    const icon = $(this).find('.plus');
    if (icon.hasClass('fa-plus')) {
      icon.removeClass('fa-plus').addClass('fa-minus');
    } else {
      icon.removeClass('fa-minus').addClass('fa-plus');
    }
  });
  


  $('nav').mouseenter(function(){
    $('.sub, .bg').stop().slideDown()
  })
  $('.bg').mouseleave(function(){
    $('.sub, .bg').stop().slideUp()
  })
};
