$(function(){
    $('.tab_menu li').click(function(){
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();
        $('.tab_list li').removeClass('on');
        $('.tab_list li').eq(i).addClass('on');
    });
});