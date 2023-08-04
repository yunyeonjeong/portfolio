//font 위로 올라 오는 값
AOS.init();

// top-btn
const topButton = document.getElementById("top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
