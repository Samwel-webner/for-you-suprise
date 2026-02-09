const startBtn = document.getElementById("startBtn");
const overlay = document.querySelector(".overlay");
const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

startBtn.addEventListener("click", () => {
  overlay.style.display = "none";

  music.play();
  isPlaying = true;
  musicBtn.textContent = "⏸ Pause Music";

  setInterval(createHeart, 700);
});

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "▶ Play Music";
  } else {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
});

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}
