//swiper
const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 38,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty('--progress', 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

//nav
$(document).ready(function () {
  var navH = $('.menu').height();

  $('.menu-btn, .n-txt').hide();

  $('.menu-btn').click(function () {
    $('.menu').toggle();
    $('.menu ul li').toggle();
    $(this).toggle();
  });

  $(window).scroll(function () {
    var roll = $(this).scrollTop() >= navH;
    if (roll) {
      $('.menu-btn').show().css({ position: 'fixed' });
      $('.menu').hide();
    } else {
      $('.menu-btn').hide();
      $('.menu').show();
    }
  });

  $(window).scroll(function () {
    var roll1 = $(this).scrollTop() >= navH;
    if (roll1) {
      $('.n-txt').show().css({ position: 'fixed' });
      $('.menu').hide();
    } else {
      $('.n-txt').hide();
      $('.menu').show();
    }
  });
});

//title
var windowHeight = $(window).height();
var scrollTop = $(window).scrollTop();

$('.h-inner').each(function () {
  var offsetTop = $(this).offset().top;
  if (scrollTop + windowHeight > offsetTop) {
    $(this).addClass('show');
  }
});

//video
$(document).ready(function () {
  var video = $('.mp4');
  var initialWidth = video.width();
  var videoContainerHeight = $('.video-container').height();
  var windowHeight = $(window).height();

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var videoTop = $('.video-container').offset().top;
    var videoHeight = $('.video-container').outerHeight();
    var windowMiddle = scrollTop + windowHeight / 2;

    // Calculate the distance between windowMiddle and videoTop
    var distanceFromMiddle = windowMiddle - videoTop;

    // Calculate the percentage of distanceFromMiddle relative to half of the video height
    var scrollPercentage = distanceFromMiddle / (videoHeight / 2);

    var newWidthPercentage;
    if (scrollPercentage < 0) {
      newWidthPercentage = 30;
    } else if (scrollPercentage < 1) {
      newWidthPercentage = 30 + scrollPercentage * 70; // Increase from 30% to 100% as scrollPercentage goes from 0 to 1
    } else {
      newWidthPercentage = 100;
    }

    var newHeight = Math.min(
      windowHeight + initialWidth,
      scrollPercentage * videoContainerHeight * 1.6 + initialWidth
    );
    video.width(newWidthPercentage + '%');
    video.height(newHeight);
  });
});

// 스크롤 시 .footer를 보여주는 함수
function showFooterOnScroll() {
  const footer = document.querySelector('.footer');
  const swiper = document.querySelector('.swiper');

  const swiperBottom = swiper.getBoundingClientRect().bottom;

  if (swiperBottom <= window.innerHeight) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
}

// 페이지 로딩 시, 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', showFooterOnScroll);

// 페이지 로딩 시 한 번 실행하여 초기 상태를 설정
showFooterOnScroll();
