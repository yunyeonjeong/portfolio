//  메뉴 스크롤 (지우면x)
$(document).ready(function () {
  $('.menu_wrapper_nav a').on('click', (e) => {
    e.preventDefault();
    $('.menu_wrapper_list').slideToggle();
    $('.menu_wrapper_list').toggleClass('hide');
  });
  $(window).on('scroll', () => {
    // console.log(scrollY);
    if (scrollY > 200) {
      $('header').css({
        backgroundColor: '#fff',
        height: '80px',
        fontSize: '1.875rem',
      });
    } else {
      $('header').css({
        backgroundColor: 'transparent',
        height: '120px',
        fontSize: '3.125rem',
      });
    }
  });
});
