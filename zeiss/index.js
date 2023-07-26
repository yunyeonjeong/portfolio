//swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 38,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
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
    $(".menu").slideToggle();
    $(this).toggle();
  });

  $(window).scroll(function () {
    var roll = $(this).scrollTop() >= navH;
    if (roll) {
      $(".menu-btn").show().css({ position: "fixed", top: "32px" });
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

//title
$(document).ready(function () {
  var windowHeight = $(window).height();

  function animateElements() {
    var scrollTop = $(window).scrollTop();

    $(".h-inner, .about, .featured").each(function () {
      var offsetTop = $(this).offset().top;
      if (scrollTop + windowHeight > offsetTop) {
        $(this).addClass("show", {
          duration: 600,
        });
      }
    });
  }

  animateElements();

  $(window).on("scroll", function () {
    animateElements();
  });
});

//video
$(document).ready(function () {
  var video = $(".mp4");
  var initialWidth = video.width();
  var videoContainerHeight = $(".video-container").height();
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var videoTop = $(".video-container").offset().top;
    var videoHeight = $(".video-container").outerHeight();
    var windowMiddle = scrollTop + windowHeight / 2;

    var distanceFromMiddle = windowMiddle - videoTop;

    var scrollPercentage = distanceFromMiddle / (videoHeight / 2);

    var newWidthPercentage;
    if (scrollPercentage < 0) {
      newWidthPercentage = 40;
    } else if (scrollPercentage < 1) {
      newWidthPercentage = 40 + scrollPercentage * 90;
    } else {
      newWidthPercentage = 100;
    }

    var newHeight = Math.min(
      windowHeight + initialWidth,
      videoContainerHeight * 1.6 + initialWidth
    );
    video.width(newWidthPercentage + "%");
    video.height(newHeight);
  });
});

//footer
function showFooterOnScroll() {
  const footer = document.querySelector(".footer");
  const swiper = document.querySelector(".swiper");

  const swiperBottom = swiper.getBoundingClientRect().bottom;

  if (swiperBottom <= window.innerHeight) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
}

window.addEventListener("scroll", showFooterOnScroll);

showFooterOnScroll();
