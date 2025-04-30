$(window).on('load', function () {
    slider();  
})

function slider() {
    let swiper = undefined;
    let slideNum = $('.slider .swiper-slide').length //슬라이드 총 개수
    let slideInx = 0; //현재 슬라이드 index

    //디바이스 체크
    let oldWChk = window.innerWidth > 1180 ? 'pc' : 'mo';
    sliderAct();
    $(window).on('resize', function () {
        let newWChk = window.innerWidth > 1180 ? 'pc' : 'mo';
        if (newWChk != oldWChk) {
            oldWChk = newWChk;
            sliderAct();
        }
    })
    
    //슬라이드 실행
    function sliderAct(){
        //슬라이드 초기화 
        if (swiper != undefined){ 
            swiper.destroy();
            swiper = undefined;
        }

        //slidesPerView 옵션 설정
        let viewNum = oldWChk == 'pc' ? 5 : 2.3;
        //loop 옵션 체크
        let loopChk = slideNum > viewNum;
        swiper = new Swiper(".first", {
            loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".second", {
      slidesPerView: '2.5', 
      spaceBetween: 10,
      breakpoints: {
        
        1024: {
          slidesPerView: '3',  //브라우저가 1024보다 클 때
          spaceBetween: 10,
        },
      },

    });
    var swiper = new Swiper(".third", {
        slidesPerView: '1.5', 
      spaceBetween: 10,
      breakpoints: {
        1024: {
          slidesPerView: 3.5,  //브라우저가 1024보다 클 때
          spaceBetween: 10,
        },
      },
      breakpoints: {
        1300: {
          slidesPerView: 3,  //브라우저가 1024보다 클 때
          spaceBetween: 30,
        },
      },
    });
    var swiper = new Swiper(".fourth", {
        slidesPerView: '2', 
      spaceBetween: 10,
      breakpoints: {
        1024: {
          slidesPerView: 3,  //브라우저가 1024보다 클 때
          spaceBetween: 10,
        },
      },
      breakpoints: {
        1300: {
          slidesPerView: 3,  //브라우저가 1024보다 클 때
          spaceBetween: 10,
        },
      },
            on: {
                activeIndexChange: function () {
                    slideInx = this.realIndex; //현재 슬라이드 index 갱신
                }
            },
      });
    }
}



$(function () {
    function isDesktop() {
        return $(window).width() >= 768;
    }

    // 메뉴 슬라이드 효과 (PC에서만)
    if (isDesktop()) {
        $('header').mouseover(function () {
            $('.sub_bg, .sub').stop().slideDown(300);
        });

        $('header').mouseleave(function () {
            $('.sub_bg, .sub').stop().slideUp(300);
        });
    }

    // 타임라인 호버 효과 (PC에서만)
    if (isDesktop()) {
        $('.timeline .swiper-slide .con').mouseover(function () {
            $(this).addClass('on');
        });

        $('.timeline .swiper-slide .con').mouseleave(function () {
            $('.timeline .swiper-slide .con').removeClass('on');
        });
    }

    // 반응형 리사이징 대응 
    $(window).resize(function () {
        location.reload(); 
    });

    //top 이동 버튼
    $(window).scroll(function(){
        t=$(window).scrollTop();
        if(t>600)
            $('.top_btn>a').fadeIn();
        else{
            $('.top_btn>a').fadeOut();
        }
    })
    $(window).trigger('scroll');
    $('.top_btn>a').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0})
    })
    
    //모바일 메뉴
    $('.mbmenu').click(function(){
        $(this).toggleClass('active');
        $('.mb_nav').stop().slideToggle()
        return false;
    })
});
