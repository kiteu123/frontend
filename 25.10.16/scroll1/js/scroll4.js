$(function () {

    var f_top = $('#float_div').offset().top;
    // alert(f_top); 250

    $(window).scroll(function () {
        let sct = $(this).scrollTop();

        $('#float_div').stop().animate({ top: f_top + sct }, 300)

        // for (var i = 0; i < $('.container > div').length; i++) {
        //     if (sct >= $('.container > div').eq(i).offset().top) {
        //         $('nav ul li').removeClass('on');
        //         $('nav ul li').eq(i).addClass('on');
        //         $('#float_div ul li').removeClass('on');
        //         $('#float_div ul li').eq(i).addClass('on');
        //     }
        // }

        $('.container > div').each(function (i) {
            if (sct >= $('.container > div').eq(i).offset().top) {
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(i).addClass('on');
                $('#float_div ul li').removeClass('on');
                $('#float_div ul li').eq(i).addClass('on');
            }
        });

        $('.s_Top').text(sct);
        if (sct >= 450 && sct <= 1000) {
            $('.left1').addClass('on');
        } else {
            $('.left1').removeClass('on');
        }

        if (sct >= 1000 && sct <= 1400) {
            $('.right1').addClass('on');
        } else {
            $('.right1').removeClass('on');
        }
        if (sct >= 3500) {
            $('.s4_1').addClass('active');
            setTimeout(function () {
                $('.s4_2').addClass('active');
            }, 400)
            setTimeout(function () {
                $('.s4_3').addClass('active');
            }, 800)
            setTimeout(function () {
                $('.s4_4').addClass('active');
            }, 1200)
        }



        // if (sct >= $('.container > div').eq(0).offset().top) {
        //     $('nav ul li').removeClass('on');
        //     $('nav ul li').eq(0).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(1).offset().top) {
        //     $('nav ul li').removeClass('on');
        //     $('nav ul li').eq(1).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(2).offset().top) {
        //     $('nav ul li').removeClass('on');
        //     $('nav ul li').eq(2).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(3).offset().top) {
        //     $('nav ul li').removeClass('on');
        //     $('nav ul li').eq(3).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(4).offset().top) {
        //     $('nav ul li').removeClass('on');
        //     $('nav ul li').eq(4).addClass('on');
        // }

        // if (sct >= $('.container > div').eq(0).offset().top) {
        //     $('#float_div ul li').removeClass('on');
        //     $('#float_div ul li').eq(0).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(1).offset().top) {
        //     $('#float_div ul li').removeClass('on');
        //     $('#float_div ul li').eq(1).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(2).offset().top) {
        //     $('#float_div ul li').removeClass('on');
        //     $('#float_div ul li').eq(2).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(3).offset().top) {
        //     $('#float_div ul li').removeClass('on');
        //     $('#float_div ul li').eq(3).addClass('on');
        // }
        // if (sct >= $('.container > div').eq(4).offset().top) {
        //     $('#float_div ul li').removeClass('on');
        //     $('#float_div ul li').eq(4).addClass('on');
        // }



        if (sct >= 300) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });
    $('nav ul li').click(function () {
        var i = $(this).index();
        var offset_t = $('.container > div').eq(i).offset().top;
        $('html,body').stop().animate({ scrollTop: offset_t }, 1000);
        // $('nav ul li').removeClass('on');
        // $('nav ul li').eq(i).addClass('on');

        return false;
    })

    $('#float_div ul li').click(function () {
        var i = $(this).index();
        var offset_t = $('.container > div').eq(i).offset().top;
        $('html,body').stop().animate({ scrollTop: offset_t }, 1000);
        // $('nav ul li').removeClass('on');
        // $('nav ul li').eq(i).addClass('on');

        return false;
    })

    $('.container > div').mousewheel(function (event, d) {
        console.log(d);

        if (d > 0) { // 휠 위로동작 감지
            let preVal = $(this).prev().offset().top;
            $('html,body').stop().animate({ scrollTop: preVal }, 1000);
        }

        if (d < 0) { // 휠 아래로 동작 감지
            let nextVal = $(this).next().offset().top;
            $('html,body').stop().animate({ scrollTop: nextVal }, 1000);
        }
    });

    $('#popup').draggable();


    // 나중에 pop = no 를 넣어 하루동안 저장 예정
    // 처음에는 pop 변수도 없고 no 도 없음
    if ($.cookie('pop') != 'no') {
        $('#popup').show();
    };
    $('#popup area:eq(0)').click(function () {
        $('#popup').fadeOut('slow');
    });

    $('#popup area:eq(1)').click(function () {
        $.cookie('pop', 'no', { expires: 1 })
        $('#popup').fadeOut('slow');
    });

    $('#notice_wrap').draggable();
    if ($.cookie('popup') == 'none') {
        $('#notice_wrap').hide();
    }
    // ('popup') 변수에 none이 저장되어있으면
    // $('#notice_wrap') 을 숨겨라 
    let chk = $('#expiresChk');

    $('.closeBtn').on('click', closePop);

    function closePop() {
        if (chk.is(':checked')) { // chk에 체크가 되어 있으면
            $.cookie('popup', 'none', { expires: 3 });
            // 쿠키 popup에 none을 가지고 3일의 기한을 가진다
        }

        $('#notice_wrap').fadeOut();
    }

    // 방법 1: .prop('checked')가 true인지 확인
    // if (chk.prop('checked')) { 
    // ...
    // } 

});