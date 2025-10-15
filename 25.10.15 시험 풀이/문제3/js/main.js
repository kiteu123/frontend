$(function(){
    $('.a li h2').hover(function(){
        $('.a li h2').removeClass('on');
        $(this).addClass('on'); 
    })
    $('.a li h2').mouseleave(function(){
        $('.a li h2').removeClass('on');
    });


    $('.a li h2').click(function(){
        $('.a li h2').removeClass('selected');

        var status = $(this).next('p').css('display')
        // alert(status); 
        if(status === 'none'){
            $('p').slideUp();
            $(this).next('p').slideDown();
            $(this).addClass('selected');
        }else{
            $('p').slideUp();
        }
        
    });
});