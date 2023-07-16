// menu
$(document).ready(function () {
  $(".header-wrapper a").on("click", (e) => {
    e.preventDefault();
    $(".menu-wrapper").slideToggle();
    $(".menu-wrapper").toggleClass("hide");
  });
});

//img move
const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $(".e-img").css({
    transform: `translate(${x / 60}px, ${y / 30}px)`,
  });

  requestAnimationFrame(movingImg);
};
$(".effect").on("mousemove", movingImg);
