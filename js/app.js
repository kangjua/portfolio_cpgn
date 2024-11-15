// header - 아래로 내리거나 움직임이 없으면 없어지고, 위로 올리면 생기는
let lastScroll =0;
$(window).scroll(function(){
    let cuScroll = $(this).scrollTop();
    // 스크롤을 내렸을때
    if(lastScroll < cuScroll){
        $('header').stop().animate({top:-104},500);
    }else{
        $('header').stop().animate({top:0},500);
    }
    lastScroll = cuScroll;
})
// vs01 slider- 페이지 이동 
let visual = $('.m_container').bxSlider({
    // options를 객체형식으로 작성 키 : 값;
    mode:'horizontal', //vertical face 도 있음
    speed: 1000,
    auto:true, //auto를 킬때는 true   
    pager:false,
    controls:false,
    // auto:false,
});
$('#visual .prev').click(function(){
    visual.goToPrevSlide();
})
$('#visual .next').click(function(){
    visual.goToNextSlide();
})
// vs02 wrapper 
// $('.vs2_wrapper').slick({
//       // 옵션 설정
//       autoplay: true,         // 자동 재생 설정 (true or false)
//       dots: false,             // 페이지 네비게이션 점 보이기 설정 (true or false)
//       arrows: true,           // 이전/다음 버튼 보이기 설정 (true or false)
//       infinite: true,         // 무한 롤링 설정 (true or false)
//       speed: 500,             // 슬라이드 전환 속도 (밀리초 단위)
//       slidesToShow: 3,        // 한 화면에 보여줄 슬라이드 개수
//       slidesToScroll: 1       // 한 번에 넘길 슬라이드 개수

// });
let vs02Slide = $('.vs2_wrapper').slick({
    autoplay: true,
    dot:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth:true,
    arrows:false,
});
$('.vs02 .slick-next').click(function(){
    vs02Slide.slick('slickNext');
});
$('.vs02 .slick-prev').click(function(){
    vs02Slide.slick('slickPrev');
});
// vs06 .slides
let vs06Slides = $('.vs06 .slides').slick({
    autoplay: true,
    dot:false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,     // 한 번에 넘길 슬라이드 개수
    centerMode: true,
    variableWidth:true,
    arrows:false,
});
$('.vs06 .slick-next').click(function(){
    vs06Slide.slick('slickNext');
});
$('.vs06 .slick-prev').click(function(){
    vs06Slide.slick('slickPrev');
});