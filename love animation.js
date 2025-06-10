function showHearts() {
  const container = document.querySelector('.hearts-container');
  const audio = document.getElementById('music');
  audio.play();

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.innerText = "❤️";
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

// Add floating heart styles dynamically
const style = document.createElement("style");
style.innerHTML = `
  .floating-heart {
    position: absolute;
    bottom: 0;
    font-size: 24px;
    animation: floatUp linear forwards;
  }

  @keyframes floatUp {
    to {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
