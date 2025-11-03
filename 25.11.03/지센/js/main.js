$(document).ready(function () {
  $(".mobile_tab a").on("click", function (e) {
    e.preventDefault();

    $(".mobile_nav").toggleClass("active");

    if ($(".mobile_nav").hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".mobile_nav, .mobile_tab").length &&
      $(".mobile_nav").hasClass("active")
    ) {
      $(".mobile_nav").removeClass("active");
      $("body").css("overflow", "auto");
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
