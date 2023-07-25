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

//메인 시간
const date = document.querySelector(".date span");
const hours = document.querySelector(".hours span");
const minutes = document.querySelector(".minutes span");
const seconds = document.querySelector(".seconds span");
const now = new Date();

// 재귀함수 방법
function updateTime() {
  const now = new Date();
  date.textContent = String(now.getDate()).padStart(2, "0");
  hours.textContent = String(now.getHours()).padStart(2, "0");
  minutes.textContent = String(now.getMinutes()).padStart(2, "0");
  seconds.textContent = String(now.getSeconds()).padStart(2, "0");

  setTimeout(updateTime, 1000); // setInterval()을 이용하는 것보다 메모리 측면에서 효율적
}
updateTime();
