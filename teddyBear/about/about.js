const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $(".what_wrapper_img").css({
    transform: `translate(${x / 60}px, ${y / 30}px)`,
  });

  requestAnimationFrame(movingImg);
};
$(".what_wrapper").on("mousemove", movingImg);
