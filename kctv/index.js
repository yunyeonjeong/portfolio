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
