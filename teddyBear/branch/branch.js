// 핑크곰 떨어뜨리기
const bearMove = document.querySelector('.unique_wrapper').clientHeight - 240;
$(window).on('scroll', () => {
  console.log(scrollY);
  if (0 < scrollY && scrollY < bearMove + 120) {
    $('.bear_wrapper').css({
      top: `10%`,
      transform: `translate(-50%, ${scrollY}px)`,
    });
  } else {
    $('.bear_wrapper').css({
      top: `10%`,
    });
  }
  if (scrollY > bearMove) {
    // 곰 투명해지기도형 움직이기
    $('.bear_wrapper .bear1').css({
      opacity: 0,
      transform: `scale(0)`,
    });
    // 도형 움직이기
    $('main .fabric_img').addClass('active');
    $('main .cotton_img').addClass('active');
    $('main .needle_img').addClass('active');
  } else {
    $('.bear_wrapper .bear1').css({
      opacity: 1,
      transform: `scale(1)`,
    });
    $('main .fabric_img').removeClass('active');
    $('main .cotton_img').removeClass('active');
    $('main .needle_img').removeClass('active');
  }
});

// 지점 상세보기 목록 슬라이드
const lis = document.querySelectorAll('.museum_list > li');
lis.forEach(function (a, idx) {
  $(a).on('click', () => {
    $(a).find('.list_content_wrapper').slideToggle();
    $(a).siblings().find('.list_content_wrapper').slideUp();
    $(a).toggleClass('rotate');
    $(a).siblings().removeClass('rotate');
  });
});

// svg 통제
const arrow_left = document.querySelectorAll('.arrow1 path');
const arrow_right = document.querySelectorAll('.arrow2 path');
const arrow_bottom = document.querySelectorAll('.arrow3 path');
$(window).on('scroll', () => {
  arrow_left.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > bearMove) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});
$(window).on('scroll', () => {
  arrow_right.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > bearMove) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});
$(window).on('scroll', () => {
  arrow_bottom.forEach(function (a, idx) {
    let length = a.getTotalLength();
    if (scrollY > bearMove) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});

// svg
const line = document.querySelectorAll('.contentBox > svg path');
$(window).on('scroll', () => {
  line.forEach(function (a, idx) {
    let length = a.getTotalLength();
    // console.log(length);
    if (scrollY > 2800) {
      a.style.strokeDasharray = length;
      a.style.strokeDashoffset = 0;
    } else {
      a.style.strokeDashoffset = length;
    }
  });
});
