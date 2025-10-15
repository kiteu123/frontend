$(function(){
    var photo = $('.slide > ul > li');
    var button = $('.slidebutton > ul > li');
    var current = 0;
    var id;
    var i;

    photo.css('left','100%');
    photo.eq(0).css('left','0');

    button.eq(0).addClass('on');

    button.click(function(){
        i = $(this).index();

        button.removeClass('on');
        button.eq(i).addClass('on');

        move();

        return false;
    });

    function timer(){
        id =setInterval(function(){
            var n=current +1;
            if(n===5) n=0;

            button.eq(n).trigger('click');
        },3000);
    }

    timer();

    function move(){
        if(current == i) return;

        var cu=photo.eq(current);
        var next=photo.eq(i);

        cu.css('left', '0').stop().animate({'left':'-100%'},500);
        next.css('left','100%').stop().animate({'left':'0'},500);

        current = i;
    };
});