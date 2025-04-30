$(function () {
  function updateImage() {
    if ($(window).width() < 768) {
      $(".slide > img").attr("src", "./images/mb_main.jpg");
    } else {
      $(".slide > img").attr("src", "./images/main.jpg");
    }

    $(".mb_main > li").click(function () {
      $(".mb_main>li").removeClass("active");
      $(this).addClass("active");
    });
  }

  // 처음 로딩 시 실행
  updateImage();

  // resize 이벤트에 debounce 적용
  let resizeTimer;
  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateImage, 200); 
  });

  // 모바일 메뉴 토글
  $(".menu_toggle").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("on"); // 아이콘 전환
    $(".mb_menu").toggleClass("active"); // 메뉴 열기/닫기
    $("body").toggleClass("no-scroll");
  });

  $(window).on("resize", function () {
    if ($(window).width() >= 1024) {
      $(".mb_menu").removeClass("active");
      $(".menu_toggle").removeClass("on"); 
    }
  });

  //HEADER-TOP
  let n = 0;
  $(".header_top > span").eq(n).addClass("on");
  setInterval(function () {
    if (n < 1) {
      n++;
    } else {
      n = 0;
    }
    $(".header_top > span").removeClass("on");
    $(".header_top > span").eq(n).addClass("on");
  }, 3000);

  //header bottom
  var top1 = $(".header_bottom").offset().top;
  let lastScroll = 0;
  $(window).scroll(function () {
    var h = $(this).scrollTop();
    if (h > top1) {
      $(".header_bottom").addClass("on");
    }
    if (h < lastScroll) {
      // 사용자가 스크롤을 위로 올릴 때
      $(".header_bottom").removeClass("on");
    }
    lastScroll = h; // 현재 위치 저장
  });
});
