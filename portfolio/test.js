const slider = document.querySelector(".slider");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let index = 0;
    const slideWidth = 800; // 슬라이드 한 개의 너비

    nextBtn.addEventListener("click", () => {
      if (index < 2) {
        index++;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
      }
    });

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        slider.style.transform = `translateX(${-slideWidth * index}px)`;
      }
    });