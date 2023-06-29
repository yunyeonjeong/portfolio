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

// 하단 소개
$(window).on('scroll', () => {
  if ('.textBox'.offsetTop > '#t-box1'.offsetTop) {
    $('#t-box1').css({ opacity: 1 });
  } else {
    $('#t-box1').css({ opacity: 0 });
  }
});

/*$(window).on('scroll', () => {
  let scrollHt = $(document).scrollTop();

  if (scrollY > 200) {
    $('#t-box1').css({ opacity: 1 });
  } else {
    $('#t-box1').css({ opacity: 0 });
  }
  if (scrollY > 200) {
    $('#t-box2').css({ opacity: 1 });
  } else {
    $('#t-box2').css({ opacity: 0 });
  }
});*/
