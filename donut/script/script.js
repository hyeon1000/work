window.onload = function () {
  //이벤트 슬라이드
  const eventWrap = document.querySelector(".event_wrap");
  const slider = eventWrap.querySelector(".slider");
  const slideLis = slider.querySelectorAll("li");
  const prevBtn = eventWrap.querySelector(".prev");
  const nextBtn = eventWrap.querySelector(".next");

  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * slideLis.length;
  slider.style.width = `${sliderWidth}px`;

  let currentIdx = 0;
  let translate = 0;

  // 클릭 이벤트
  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentIdx < slideLis.length - 1) {
      currentIdx++;
      translate = -liWidth * currentIdx;
      slider.style.transform = `translateX(${translate}px)`;
    }
  });

  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentIdx > 0) {
      currentIdx--;
      translate = -liWidth * currentIdx;
      slider.style.transform = `translateX(${translate}px)`;
    }
  });

  //메뉴 자동 슬라이드 new
  const imgSlide = document.querySelector(".slide");
  const clone = imgSlide.cloneNode(true);
  
  document.querySelector(".menu_slidewrap").appendChild(clone);
  document.querySelector(".slide").offsetWidth + "px";
  imgSlide.classList.add("original");
  clone.classList.add("clone");

  //메뉴 자동 슬라이드 best
  const imgSlide2 = document.querySelector(".slide2"); // 원본
  const clone2 = imgSlide2.cloneNode(true); // 복제
  const wrapper = document.querySelector(".menu_slidewrap2");

  imgSlide2.classList.add("original2");
  clone2.classList.add("clone2");

  wrapper.appendChild(clone2);

  //nav
  const menuItems = document.querySelectorAll("nav>ul");
  const subMenus = document.querySelectorAll(".sub");
  const subbg = document.querySelector(".bg");

  menuItems.forEach((menu) => {
    menu.addEventListener("mouseover", () => {
      subMenus.forEach((submenu) => {
        submenu.style.maxHeight = "500px";
      });
      if (subbg) {
        subbg.style.maxHeight = "200px";
      }
    });

    menu.addEventListener("mouseleave", () => {
      subMenus.forEach((submenu) => {
        submenu.style.maxHeight = "0";
      });
      if (subbg) {
        subbg.style.maxHeight = "0";
      }
    });
  });

  //mb_menu
  $(".mbmenu").click(function () {
    $(this).toggleClass("active");
    $(".mb_nav").stop().toggleClass("on");
    return false;
  });

  //sns
  $(".sns").click(function () {
    $(".sns_list>ul").stop().slideToggle();
    return false;
  });
};
