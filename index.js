//arrow

/*$(document).ready(function () {
  Moving();
});
function Moving() {
  $('.box5').animate({ marginBottom: '100px' }, 300, '', function () {
    $(this).animate({ margin: '0px' }, 300, '', function () {
      Moving();
    });
  });
}*/

/*
    toLocaleDateString(), toLocaleTimeString(), toLocaleString() 함수
    브라우저에 설정된 국가에서 사용되는 날짜, 시간 표현 형식으로 날짜와 시간을 보여줌

    document.write(today.toLocaleDateString('en-US')); 월/일/연도 순서로
    */

const date = document.querySelector('.date span');
const hours = document.querySelector('.hours span');
const minutes = document.querySelector('.minutes span');
const seconds = document.querySelector('.seconds span');
const now = new Date();

// 재귀함수 방법
function updateTime() {
  const now = new Date();
  date.textContent = String(now.getDate()).padStart(2, '0');
  hours.textContent = String(now.getHours()).padStart(2, '0');
  minutes.textContent = String(now.getMinutes()).padStart(2, '0');
  seconds.textContent = String(now.getSeconds()).padStart(2, '0');

  setTimeout(updateTime, 1000); // setInterval()을 이용하는 것보다 메모리 측면에서 효율적
}
updateTime();
