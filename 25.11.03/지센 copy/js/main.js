$(document).ready(function () {
  $(".mobile_tab a").on("click", function (e) {
    e.preventDefault();

    $(".mobile_nav").toggleClass("active");
    $(".transparency").toggleClass("active");
    $(".container").toggleClass("active"); // ✅ 본문도 함께 이동

    if ($(".mobile_nav").hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
      $(".mobile_nav .sub").slideUp(); // ✅ 메뉴 닫을 때 sub도 닫기
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".mobile_nav, .mobile_tab").length &&
      $(".mobile_nav").hasClass("active")
    ) {
      $(".mobile_nav").removeClass("active");
      $(".transparency").removeClass("active");
      $(".container").removeClass("active"); // ✅ 닫을 때 원위치
      $("body").css("overflow", "auto");
      $(".mobile_nav .sub").slideUp(); // ✅ 외부 클릭으로 닫을 때도 sub 닫기
    }
  });

  $(".mobile_nav > ul > li > a").on("click", function (e) {
    const submenu = $(this).next(".sub");

    if (submenu.length > 0) {
      e.preventDefault();

      $(".mobile_nav .sub").not(submenu).slideUp();
      submenu.slideToggle();
    }
  });
});
