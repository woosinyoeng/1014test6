$(".sub").hide();
$(".menu>li").mouseover(function(){
 $(this).children(".sub").stop().show();
 $(".header").addClass("hover");
})
$(".menu>li").mouseout(function(){
 $(this).children(".sub").stop().hide();
 $(".header").removeClass("hover");
})

$(".m_sub").hide();
$(".m_menu>li").click(function(){
 $(this).toggleClass("m_active");
 $(this).siblings().removeClass("m_active");
 $(this).children(".m_sub").slideToggle();
 $(this).siblings().children(".m_sub").slideUp();
})

$(".m_nav").hide();
$(".m_btn").click(function(){
 $(".m_nav").fadeIn();
$(".m_nav_wrap").addClass("m_nav_active")
})
$(".m_close").click(function(){
 $(".m_nav").fadeOut();
$(".m_nav_wrap").removeClass("m_nav_active")
})

/* con1box2 */
const slider1=new Swiper('.con1box2 .swiper',{
 loop:true,
 navigation:{
  prevEl:'.prev',
  nextEl:'.next'
 },
 pagination:{el:'.con1box2 .swiper-pagination',type:'fraction'}
})


/* site */
const site=new Swiper('.site .swiper',{
 loop:true,
 slidesPerView:"auto",
 navigation:{
  prevEl:'.site_prev',
  nextEl:'.site_next'
 },
 autoplay:{delay:2500,disableOnInteraction:false,}
})

$(".site_pause").click(function(){
 $(".site_pause").hide();
 $(".site_play").show();
 site.autoplay.stop();
})

$(".site_play").click(function(){
 $(".site_play").hide();
 $(".site_pause").show();
 site.autoplay.start();
})


$(".top_btn").hide();
$(window).scroll(function(){
if($("html").scrollTop()>100){
 $(".top_btn").fadeIn()
} else{
 $(".top_btn").fadeOut()
}
})

$(".top_btn").click(function(){
  $("html").animate({scrollTop:0},700)
 })
