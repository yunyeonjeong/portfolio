// 지점 안내 자동 슬라이더 및 버튼 슬라이더
const mySwiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 이용안내 svg
const arrow_left = document.querySelectorAll('.charge_wrapper svg path');
$(window).on('scroll', () => {
  arrow_left.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 3900) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});
