document.addEventListener("DOMContentLoaded", function () {
  // $(window).resize(function () {
  //   var w = $(this).width();
  //   console.log(w);

  //   if (w <= 850) {
  //   } else {
  //     if ($(".mobile_nav").hasClass("active")) {
  //       $(".mobile_nav").removeClass("active");
  //       $(".transparency").removeClass("active");
  //       $(".container").removeClass("active");
  //       $(".mobile_nav .sub").css("display", "none");
  //     }
  //   }
  // });

  // $(window).trigger("resize");
  window.addEventListener("resize", function () {
    var w = window.innerWidth;

    if (w <= 850) {
    } else {
      var mobileNav = document.querySelector(".mobile_nav");
      if (mobileNav && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");

        var transparency = document.querySelector(".transparency");
        if (transparency) transparency.classList.remove("active");

        var container = document.querySelector(".container");
        if (container) container.classList.remove("active");

        var subs = document.querySelectorAll(".mobile_nav .sub");
        subs.forEach(function (sub) {
          sub.classList.remove("active");
        });
      }
    }
  });
  // 초기 resize 이벤트 트리거
  window.dispatchEvent(new Event("resize"));

  //컴퓨터가 브라우저 켜자마자 한번 resize 명령을 실행

  // $(".nav ul").hover(
  //   function () {
  //     $(this).addClass("over");
  //   },
  //   function () {
  //     $(this).removeClass("over");
  //   }
  // );
  //.nav ul에 hover효과

  var navUls = document.querySelectorAll(".nav ul");

  navUls.forEach(function (navUl) {
    navUl.addEventListener("mouseenter", function () {
      this.classList.add("over");
    });

    navUl.addEventListener("mouseleave", function () {
      this.classList.remove("over");
    });
  });

  // $(".mobile_tab").click(function () {
  //   $(".mobile_nav").addClass("active");
  //   $(".transparency").addClass("active");
  //   $(".container").addClass("active");
  // });

  // mobile_tab 클릭이벤트
  var mobileTab = document.querySelector(".mobile_tab");

  if (mobileTab) {
    mobileTab.addEventListener("click", function () {
      var mobileNav = document.querySelector(".mobile_nav");
      if (mobileNav) mobileNav.classList.add("active");

      var transparency = document.querySelector(".transparency");
      if (transparency) transparency.classList.add("active");

      var container = document.querySelector(".container");
      if (container) container.classList.add("active");
    });
  }

  // $(".transparency").click(function () {
  //   $(".mobile_nav").removeClass("active");
  //   $(".transparency").removeClass("active");
  //   $(".container").removeClass("active");
  //   $(".mobile_nav .sub").css("display", "none");
  // });
  // transparency 클릭 이벤트
  var transparency = document.querySelector(".transparency");
  if (transparency) {
    transparency.addEventListener("click", function (e) {
      var mobileNav = document.querySelector(".mobile_nav");
      if (mobileNav) mobileNav.classList.remove("active");

      if (transparency) transparency.classList.remove("active");

      var container = document.querySelector(".container");
      if (container) container.classList.remove("active");

      var subs = document.querySelectorAll(".mobile_nav .sub");
      subs.forEach(function (sub) {
        sub.classList.remove("active");
        // 열려 있으면 닫는다.
      });

      e.preventDefault();
      return false;
    });
  }

  // $(".mobile_nav > ul > li >a").click(function () {
  //   var k = $(this).next(".sub").css("display");
  //   // alert(k);
  //   if (k == "none") {
  //     $(".mobile_nav .sub").slideUp(300);
  //     $(this).next(".sub").slideDown(300);
  //   } else {
  //     $(this).next(".sub").slideUp(300);
  //   }

  //   return false;
  // });
  //mobile_nav메뉴 클릭이벤트
  var mobileNavLinks = document.querySelectorAll(".mobile_nav > ul > li > a");
  mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var subMenu = this.nextElementSibling;
      if (subMenu && subMenu.classList.contains("sub")) {
        // 현재 서브메뉴가 열려있는지 확인
        var isActive = subMenu.classList.contains("active");

        // 모든 서브메뉴 닫기
        var allSubs = document.querySelectorAll(".mobile_nav .sub");
        allSubs.forEach(function (sub) {
          sub.classList.remove("active");
        });

        // 닫혀있었다면 열기
        if (!isActive) {
          subMenu.classList.add("active");
        }
      }
      e.preventDefault();
      return false;
    });
  });
});
