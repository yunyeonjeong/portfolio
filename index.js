//메인 시간
const date = document.querySelector('.date span');
const hours = document.querySelector('.hours span');
const minutes = document.querySelector('.minutes span');
const seconds = document.querySelector('.seconds span');
const now = new Date();

function updateTime() {
  const now = new Date();
  date.textContent = String(now.getDate()).padStart(2, '0');
  hours.textContent = String(now.getHours()).padStart(2, '0');
  minutes.textContent = String(now.getMinutes()).padStart(2, '0');
  seconds.textContent = String(now.getSeconds()).padStart(2, '0');

  setTimeout(updateTime, 1000);
}
updateTime();

//font 위로 올라 오는 값
AOS.init();
