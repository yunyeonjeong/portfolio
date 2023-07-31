// 메인 자동 슬라이더 및 버튼 슬라이더
const mySwiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 3000,
    centeredSlides: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 유튜브
const videoLinks = document.querySelectorAll('.vod-list a');
videoLinks.forEach((link) => {
  link.addEventListener('click', handleVideoClick);
});
function handleVideoClick(event) {
  event.preventDefault();
  const videoUrl = event.currentTarget.getAttribute('data-video-url');
  showVideo(videoUrl);
}
function getBigScreenIframe() {
  return document.querySelector('.youtube');
}
function showVideo(videoUrl) {
  const bigScreenIframe = getBigScreenIframe();
  bigScreenIframe.src = videoUrl;
}

// 자주하는 질문 상세 슬라이드
const lis = document.querySelectorAll('.question-box > li');
lis.forEach(function (a, idx) {
  $(a).on('click', () => {
    $(a).find('.question-wrapper').slideToggle();
    $(a).siblings().find('.question-wrapper').slideUp();
    $(a).toggleClass('rotate');
    $(a).siblings().removeClass('rotate');
  });
});
