$(function(){
$(".l_menu li").click(function(){
    $(this).find("span").toggleClass("on");
    $(".hide_menu").toggleClass("on");


})

    $("#section").fullpage({

        navigation:true,  /* 점점 생김 */
        navigationPosition:"right",  /* 왼쪽으로 이동 */
        keyboardScrolling:true, /* 스페이스 방향키로 이동가능 */
        ScrollingSpeed:3000

    })//fullpage

    $(".view_sub").hide();
    $(".view_menu").hover(function(){
        $(".view_sub").show();
    }, function(){
        $(".view_sub").hide();
    })//
    

    $(".l_img").slick({
        autoplay:true,
        autoplaySpeed:2500,
        arrows:false,
        
    })

})//jq close