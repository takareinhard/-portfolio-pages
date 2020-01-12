$(".menu-trigger").on("click", function(){
  $(this).toggleClass("active");
  $(".navigation").toggleClass("fix");//追記
});

document.getElementById("navs").onclick = function () {
  const e = document.getElementById("navs");
  e.style.display = "none";
};

// document.getElementById("navs").onclick = function () {
//   const e = document.getElementById("navs");
//   e.style.display = "block";
// }