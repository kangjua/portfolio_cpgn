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
    vs06Slides.slick('slickNext');
});
$('.vs06 .slick-prev').click(function(){
    vs06Slides.slick('slickPrev');
});
// aside search
$('aside .search_btn').click(function(){
    $('aside .search_on').css('display','block');
})
$('aside .search_on .off').click(function(){
    $('aside .search_on').css('display','none');
})
// 스크롤 이벤트 > 선생님께 여쭈어봐야할듯
// $(window).scroll(function(){
//     let current_scroll = $(this).scrollTop();
//     console.log(current_scroll);
//     if(current_scroll > 0){
//         $('aside > .vs_side > .span:firth > a').css('backgroundColor','#000');
//     }else if(current_scroll > 755){
//         $('aside > .vs_side > .span:eq(1) > a').css('backgroundColor','#000');
//     }else if(current_scroll > 1526){
//         $('aside > .vs_side > .span:eq(2) > a').css('backgroundColor','#000');
//     }else if(current_scroll > 2439){
//         $('aside > .vs_side > .span:eq(3) > a').css('backgroundColor','#000');
//     }else if(current_scroll > 3396){
//         $('aside > .vs_side > .span:eq(4) > a').css('backgroundColor','#000');
//     }else{
//         $('aside > .vs_side > .span:eq(5) > a').css('backgroundColor','#000');
//     }
// })
// site_map
$('aside .side_meun').click(function(){
    $('.site_map').css('display','block');
})
$('.site_map .site_off').click(function(){
    $('.site_map').css('display','none');
})