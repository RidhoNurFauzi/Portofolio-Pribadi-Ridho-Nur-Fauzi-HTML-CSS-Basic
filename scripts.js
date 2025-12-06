document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.querySelector(".stars");
  const pastelColors = ["#f7c6c7", "#c6f7e2", "#c6d8f7", "#f7f3c6", "#e2c6f7"];

  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.textContent = "★";

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    star.style.fontSize = Math.random() * 40 + 40 + "px"; // ukuran besar: 40–80px
    star.style.transform = `rotate(${Math.random() * 360}deg)`;
    star.style.animationDelay = Math.random() * 5 + "s";

    starsContainer.appendChild(star);
  }
});
