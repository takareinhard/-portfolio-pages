$(".menu-trigger").on("click", function () {
  const e = document.getElementById("navs");
  if (e.style.display = "block") {
    $(this).toggleClass("active");
    $(".navigation").toggleClass("fix");//追記
  } else {
    e.style.display = "block";
    $(".navigation").toggleClass("fix");//追記
  }
});

document.getElementById("navs").onclick = function () {
  const e = document.getElementById("navs");
  e.style.display = "none";
  $(".menu-trigger").toggleClass("active");
  $(".navigation").removeClass('fix');
};

// document.getElementById("navs").onclick = function () {
//   const e = document.getElementById("navs");
//   e.style.display = "block";
// }