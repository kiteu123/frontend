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

            $('.slider li .text' + k).addClass('on');
            $('.slider li .atext' + k).addClass('on');
        }
    });

    let a1 = $('.s2_title img').offset().top;
    let a2 = $('.s2_title h2').offset().top;
    let a3 = $('.s2_title p').offset().top;
    let a4 = $('.s2_table li').offset().top;
    console.log(a1, a2, a3, a4);

    $(window).scroll(function () {
        var sct = $(this).scrollTop();
        if (a1 <= sct + 700) {
            $('.s2_title img').addClass('slide');
        }

        if (a2 < sct + 700) {
            $('.s2_title h2').addClass('slide');
        }

        if (a3 < sct + 700) {
            $('.s2_title p').addClass('slide');
        } else {
            $('.s2_title p').removeClass('slide');
        }

        if (a4 < sct + 700) {
            $('.s2_table li').eq(0).addClass('slide');
            setTimeout(function () {
                $('.s2_table li').eq(1).addClass('slide');
            }, 300)
            setTimeout(function () {
                $('.s2_table li').eq(2).addClass('slide');
            }, 600)
            setTimeout(function () {
                $('.s2_table li').eq(3).addClass('slide');
            }, 900)
        }
    });

    let b1 = $('.s3_title img').offset().top;
    let b2 = $('.s3_title h2').offset().top;
    let b3 = $('.s3_title p').offset().top;
    let b4 = $('.s3_table li').offset().top;
    console.log(b1, b2, b3, b4);

    $(window).scroll(function () {
       var sct = $(this).scrollTop();
        if (b1 <= sct + 600) {
            $('.s3_title img').addClass('slide');
        }

        if (b2 < sct + 600) {
            $('.s3_title h2').addClass('slide');
        }

        if (b3 < sct + 600) {
            $('.s3_title p').addClass('slide');
        } else {
            $('.s3_title p').removeClass('slide');
        }

        if (b4 < sct + 600) {
            $('.s3_table li').eq(0).addClass('slide');
            setTimeout(function () {
                $('.s3_table li').eq(1).addClass('slide');
            }, 300)
            setTimeout(function () {
                $('.s3_table li').eq(2).addClass('slide');
            }, 600)
            setTimeout(function () {
                $('.s3_table li').eq(3).addClass('slide');
            }, 900)
            setTimeout(function () {
                $('.s3_table li').eq(4).addClass('slide');
            }, 1200)
        }
    });

    let c1 = $('.s4_title img').offset().top;
    let c2 = $('.s4_title h2').offset().top;
    let c3 = $('.s4_title p').offset().top;
    let c4 = $('.s4_table li').offset().top;
    console.log(c1, c2, c3, c4);

    $(window).scroll(function () {
       var sct = $(this).scrollTop();
        if (c1 <= sct + 900) {
            $('.s4_title img').addClass('slide');
        }

        if (c2 < sct + 900) {
            $('.s4_title h2').addClass('slide');
        }

        if (c3 < sct + 900) {
            $('.s4_title p').addClass('slide');
        } else {
            $('.s4_title p').removeClass('slide');
        }

        if (c4 < sct + 900) {
            $('.s4_table li').eq(0).addClass('slide');
            setTimeout(function () {
                $('.s4_table li').eq(1).addClass('slide');
            }, 300)
            setTimeout(function () {
                $('.s4_table li').eq(2).addClass('slide');
            }, 600)
            setTimeout(function () {
                $('.s4_table li').eq(3).addClass('slide');
            }, 900)
            setTimeout(function () {
                $('.s4_table li').eq(4).addClass('slide');
            }, 1200)
        }
    });

     let d1 = $('.s5_title').offset().top;
    
    console.log(d1);
    

    $(window).scroll(function () {
       var sct = $(this).scrollTop();
       
        if (d1 <= sct + 900) {
            $('.s5_title').addClass('xslide');
        }
    });
     $(window).scroll(function () {
       var sct = $(this).scrollTop();
       
        if (d1 <= sct + 900) {
            $('.leftslide1').addClass('xslide');
            $('.rightslide1').addClass('xslide');
        }
    });

});