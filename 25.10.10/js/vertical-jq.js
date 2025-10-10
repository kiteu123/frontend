$(function () {
    $('.m_menu li ul').css('display', 'none');
    // $('.sub').css('display', 'none'); 
    // $('.sub').hide(); 
    //$('.m_menu li:nth-child(1) ul').css('display','block');
    //$('.m_menu li:nth-child(1) ul').show();
    //$('.m_menu li:eq(0) ul').show();
    //$('.m_menu li:first ul').show();
    // $('.sub').eq(0).show(); 

    $('.m_menu>li>a').click(function () { // .m_menu 안의 li 자식 중 a 태그를 클릭 했을 때
        
        var status = $(this).next('.sub').css('display');
        // 클릭한 a 태그 안에 있는 요소 중 클래스가 
        // sub인 요소의 display 속성 값을 status에 저장 
        // none 이면 현재 sub가 닫혀있는 상태
        // block 이면 현재 sub가 열려 있는 상태
        
        if (status === 'none') {
            $('.sub').slideUp();
            $(this).next('.sub').slideDown();
        } else {
            $('.sub').slideUp();
        }
        return false; // 화면이 위로 스크롤 되는 것을 방지
    });
});