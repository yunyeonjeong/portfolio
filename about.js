// 하단 소개
(function sBox() {
  let text = document.querySelector(".text");
  let tBox1 = document.querySelector(".t-box1");
  let tBox2 = document.querySelector(".t-box2");
  let tBox3 = document.querySelector(".t-box3");
  let tBox4 = document.querySelector(".t-box4");
  let tBox5 = document.querySelector(".t-box5");

  addEventListener("scroll", () => {
    console.log(text.scrollTop);

    if (ImgBox.offsetTop > txt1.offsetTop) {
      ImgBox.style.transform = "translateY(0)";
      ImgBox.style.opacity = "1";
      if (ImgBox.offsetTop >= txt1.offsetTop - 300) {
        img1.style.opacity = "1";
        if (ImgBox.offsetTop >= txt2.offsetTop - 200) {
          img2.style.opacity = "1";
          if (ImgBox.offsetTop >= txt3.offsetTop - 200) {
            img3.style.opacity = "1";
            if (ImgBox.offsetTop >= txt4.offsetTop - 200) {
              img4.style.opacity = "1";
              if (ImgBox.offsetTop > txt4.offsetTop) {
                ImgBox.style.opacity = "0";
              }
            } else {
              img4.style.opacity = "0";
            }
          } else {
            img3.style.opacity = "0";
          }
        } else {
          img2.style.opacity = "0";
        }
      } else {
        img1.style.opacity = "0";
      }
    } else {
      ImgBox.style.opacity = "0";
      ImgBox.style.transform = "translateY(-150px)";
    }
  });
})();
