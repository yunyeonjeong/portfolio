//첫번째 섹션 곰돌이
window.addEventListener("load", function () {
  var ear1 = document.querySelector(".welcome .container .ear1");
  var face = document.querySelector(".welcome .container .face");
  var ear2 = document.querySelector(".welcome .container .ear2");

  // 이미지 요소들을 모이는 값
  function moveImagesToCenter() {
    ear1.classList.add("move");
    face.classList.add("move");
    ear2.classList.add("move");
  }
  setTimeout(moveImagesToCenter, 100);
});

const bearLoading = function () {
  var ear1 = document.querySelector(".welcome .container .ear1");
  var face = document.querySelector(".welcome .container .face");
  var ear2 = document.querySelector(".welcome .container .ear2");
  ear1.classList.add("move");
  face.classList.add("move");
  ear2.classList.add("move");
};

setInterval(bearLoading, 3000);

const bearRemove = function () {
  var ear1 = document.querySelector(".welcome .container .ear1");
  var face = document.querySelector(".welcome .container .face");
  var ear2 = document.querySelector(".welcome .container .ear2");
  console.log("ddd");
  ear1.classList.remove("move");
  face.classList.remove("move");
  ear2.classList.remove("move");
};

setInterval(bearRemove, 6000);
//세번째 섹션 자동 슬라이더
const mySwiper = new Swiper(".mySwiper", {
  spaceBetween: -160,
  slidesPerView: "1.8",
  slidesOffsetBefore: 180,
  slidesOffsetAfter: -100,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// 추가 한 부분입니다. -준현
let arrow = document.querySelectorAll(".location_theme>svg path");
$(window).on("scroll", () => {
  arrow.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 1690) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

// svg
let line = document.querySelectorAll(".where>svg path");
$(window).on("scroll", () => {
  line.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 5050) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

let line2 = document.querySelectorAll(".circle path");
$(window).on("scroll", () => {
  line2.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 7350) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

$(window).on("scroll", () => {
  const teddyTop = document.querySelector(".bigfont").offsetTop;
  const teddyHeight =
    document.querySelector(".bigfont").clientHeight -
    document.documentElement.clientHeight;
  if (scrollY > teddyTop) {
    $(".bigfont .teddy_wrapper .teddy_dark").css({
      width: `${((scrollY - teddyTop) / teddyHeight) * 100}%`,
      maxWidth: `100%`,
    });
  } else {
    $(".bigfont .teddy_wrapper .teddy_dark").css({
      width: `0%`,
    });
  }
});

//  이중 스크롤 //:c 이중스크롤 수정입니다
$(window).on("scroll", () => {
  const aniTop = document.querySelector(".animation").offsetTop;
  const whereTop = document.querySelector(
    ".animation .where_wrapper"
  ).offsetTop;
  const aniHt = document.querySelector(".animation").clientHeight;
  const whereHt = document.querySelector(".animation .where").clientHeight;
  console.log(scrollY);
  console.log(scrollY + aniHt - whereHt);
  if (scrollY >= aniTop && scrollY <= aniTop + aniHt - whereHt) {
    $(".animation .scroll_bar").css({
      transform: `translateY(${scrollY - aniTop + 120}px)`,
    });
  }

  $(".scroll_bar .scroll_bar_black").css({
    height: `${((scrollY - aniTop) / (aniHt - whereHt)) * 100}%`,
    maxHeight: `100%`,
  });

  if (scrollY >= aniTop) {
    $(".zookeeper h2").css({
      opacity: 1,
      transform: `translateY(0)`,
    });
  } else {
    $(".zookeeper h2").css({
      opacity: 0,
      transform: `translateY(100px)`,
    });
  }
  if (scrollY >= aniTop + whereTop) {
    $(".where p").css({
      opacity: 1,
      transform: `translateY(0)`,
    });
    $(".where .btn").css({
      opacity: 1,
      transform: `translateY(0)`,
    });
  } else {
    $(".where p").css({
      opacity: 0,
      transform: `translateY(100px)`,
    });
    $(".where .btn").css({
      opacity: 0,
      transform: `translateY(100px)`,
    });
  }
});
