//swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 38,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

//nav
$(document).ready(function () {
  var navH = $(".menu").height();

  $(".menu-btn").click(function () {
    $(".menu").toggle();
    $(".menu ul li").toggle();
    $(this).toggle();
  });

  $(window).scroll(function () {
    var roll = $(this).scrollTop() >= navH;
    if (roll) {
      $(".menu-btn").show().css({ position: "fixed" });
      $(".menu").hide();
    } else {
      $(".menu-btn").hide();
      $(".menu").show();
    }
  });
  $(window).scroll(function () {
    var roll1 = $(this).scrollTop() >= navH;
    if (roll1) {
      $(".n-txt").show().css({ position: "fixed" });
      $(".menu").hide();
    } else {
      $(".n-txt").hide();
      $(".menu").show();
    }
  });
});

//video
$(document).ready(function () {
  var video = $(".mp4");
  var initialWidth = video.width();

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var newWidth = initialWidth + scrollTop;
    video.width(newWidth);
  });
});
