$(function () {

    setTimeout(function () {
        $('.slider li .text0').addClass('on');
        $('.slider li .atext0').addClass('on');

    }, 500);

    let bx = $('.slider').bxSlider({
        auto: true,
        controls: false,
        pager: false,
        mode: 'fade',
        pause: 5000,
        onSlideBefore: function () {
            $('.slider li').find('h2').removeClass('on');
            $('.slider li').find('p').removeClass('on');
        },
        onSlideAfter: function () {
            let k = bx.getCurrentSlide();

            $('.slider li .text'+k).addClass('on');
            $('.slider li .atext'+k).addClass('on');
        }
    });
});