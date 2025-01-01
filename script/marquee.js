document.addEventListener("DOMContentLoaded", function () {
  const marquees = document.querySelectorAll(".marquee-text"); // Збираємо всі блоки marquee

  marquees.forEach((marquee) => {
    const marqueeContent = marquee.querySelector(".marquee-track");
    const p = marqueeContent.querySelector("p");
    const ph = marqueeContent.querySelector(".aria-hidden");
    const screenWidth = window.innerWidth; // Ширина екрану
    const imageWidth = p.offsetWidth; // Ширина одного зображення

    // Розрахунок кількості зображень для заповнення ширини екрана
    const numImages = Math.ceil(screenWidth / imageWidth); // +1 для перекриття

    // Дублювання зображень
    for (let i = 1; i < numImages; i++) {
      const clone1 = p.cloneNode(true);
      const clone2 = ph.cloneNode(true);
      marqueeContent.appendChild(clone1);
      marqueeContent.appendChild(clone2);
    }
  });
});
