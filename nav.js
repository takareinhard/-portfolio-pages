$(".menu-trigger").on("click", function(){
  $(this).toggleClass("active");
  $(".navigation").toggleClass("fix");//追記
});

// $("list-group-item").on("click", function(){
//   $(".navigation").style.display ="none";
//   // $(".navigation").toggleClass("fix");//追記
// });