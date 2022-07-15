$(function(){
    $(window).on("scroll",function(){
        if($(window).scrollTop() > $("#nav").height()){
         $("#nav").addClass("nav_anim")
        }else{
         $("#nav").removeClass("nav_anim")
        }
      })
})
