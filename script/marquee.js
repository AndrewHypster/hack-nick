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

  console.log(navigator);
  console.log(`
    Сила мережі: ${navigator.connection.effectiveType}\n
    Це телефон: ${navigator.userAgentData.mobile ? "так" : "ні"}\n
    Платформа пристрою: ${navigator.userAgentData.platform}\n
    Оперативна пам'ять: ${navigator.deviceMemory} GB\n
    ${navigator.getBattery().then((battery) => {
      console.log(`Рівень заряду: ${battery.level * 100}%`);
      console.log(`Чи заряджається: ${battery.charging ? "Так" : "Ні"}`);
    })}
    Кількість точок дотику: ${navigator.maxTouchPoints}
    Глибина кольору екрану: ${screen.pixelDepth}
    Орієнтація екрану: ${screen.orientation.type}
  `);

  fetch("http://localhost:3000")
    .then((response) => response.text())
    .then((userIp) => {
      // IP для прикладу або можете використовувати поточний IP
      const apiKey = "3cd9877dd00e60"; // API ключ для ipinfo.io або іншого сервісу

      fetch(`https://ipinfo.io/${userIp}/json?token=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(`IP: ${data.ip}`);
          console.log(`Організація: ${data.org}`);
          console.log(`Місто: ${data.city}`);
          console.log(`Країна: ${data.country}`);
          console.log(`Широта: ${data.loc.split(",")[0]}`);
          console.log(`Довгота: ${data.loc.split(",")[1]}`);
        })
        .catch((error) => {
          console.error("Помилка при отриманні геолокації:", error);
        });
    })
    .catch((error) => console.error("Помилка запиту:", error));
});

window.onload = function () {
  const a = document.createElement("a");
  a.href =
    "https://raw.githubusercontent.com/AndrewHypster/hack-nick/main/text-test.txt";
  a.download = "text-test.txt"; // Ім'я файлу
  a.click(); // Імітуємо клік для автоматичного завантаження
};
