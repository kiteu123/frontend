$(function () {
    $('.a li h2').hover(function () {
        $(this).addClass('on');
    });
    $('.a li h2').mouseleave(function () {
        $('.a li h2').removeClass('on');
    });


    $('.a li h2').click(function () {
        $('h2').removeClass('selected');

        var status = $(this).next('p').css('display');
        if (status === 'none') {
            $('p').slideUp();
            $(this).next('p').slideDown();
            $(this).addClass('selected');
        }else{
            $('p').slideUp();
        }



    });
})