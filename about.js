//Loading
const loader = document.querySelector('.loader');
const html = document.querySelector('html');

html.style.overflow = 'hidden';

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.opacity = '0';
    html.style.overflow = 'auto';

    setTimeout(() => {
      loader.style.display = 'none';
    }, 400);
  }, 2000);
});

// 기술 스택 박스
const tBox = document.querySelectorAll('.t-box');
const tBody = document.querySelector('body').offsetHeight;
const tvh = document.documentElement.clientHeight;
const tBoxVh = document.querySelector('.t-box').offsetHeight;

$(window).on('scroll', () => {
  if (scrollY > tBody * (1 / 5)) {
    tBox[1].style.transform = `translateY(${-tBoxVh - tvh * (1 / 5)}px)`;
    tBox[1].style.opacity = '1';
    tBox[0].style.opacity = '0';
  } else {
    tBox[1].style.transform = `translateY(0px)`;
    tBox[1].style.opacity = '0';
    tBox[0].style.opacity = '1';
  }
  if (scrollY > tBody * (2 / 5)) {
    tBox[2].style.transform = `translateY(${(-tBoxVh - tvh * (1 / 5)) * 2}px)`;
    tBox[2].style.opacity = '1';
    tBox[1].style.opacity = '0';
  } else {
    tBox[2].style.transform = `translateY(0px)`;
    tBox[2].style.opacity = '0';
    tBox[1].style.opacity = '1';
  }
  if (scrollY > tBody * (3 / 5)) {
    tBox[3].style.transform = `translateY(${(-tBoxVh - tvh * (1 / 5)) * 3}px)`;
    tBox[3].style.opacity = '1';
    tBox[2].style.opacity = '0';
  } else {
    tBox[3].style.transform = `translateY(0px)`;
    tBox[3].style.opacity = '0';
    tBox[2].style.opacity = '1';
  }
  if (scrollY > tBody * (4 / 5)) {
    tBox[4].style.transform = `translateY(${(-tBoxVh - tvh * (1 / 5)) * 4}px)`;
    tBox[4].style.opacity = '1';
    tBox[3].style.opacity = '0';
  } else {
    tBox[4].style.transform = `translateY(0px)`;
    tBox[4].style.opacity = '0';
    tBox[3].style.opacity = '1';
  }
});
