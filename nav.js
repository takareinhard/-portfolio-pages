$(".menu-trigger").on("click", function(){
  $(this).toggleClass("active");
  $(".navigation").toggleClass("fix");//追記
});