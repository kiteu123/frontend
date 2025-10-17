$(function(){
    
    

    $(window).scroll(function(){
        let scl = $(this).scrollLeft();

        $('.s_Top').text(scl);

        


        $('.container > div').each(function(i){
            if(scl >= $('.container > div').eq(i).offset().left){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(i).addClass('on');
            }
        })
         

       
        
    });
     $('nav ul li').click(function () {
        var i = $(this).index();
        var offset_t = $('.container > div').eq(i).offset().left;
        $('html,body').stop().animate({ scrollLeft: offset_t }, 1000);
        // $('nav ul li').removeClass('on');
        // $('nav ul li').eq(i).addClass('on');

        return false;
    })
})