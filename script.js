
const stars = document.getElementById("stars");

// Create background stars
for (let i = 0; i < 65; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.textContent = "✦";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = (Math.random() * 10 + 5) + "px";
  star.style.animationDelay = Math.random() * 2 + "s";
  stars.appendChild(star);
}

// Navigate to page 2
function openSurprise() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
  celebrate();
}

// Return to page 1
function goBack() {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page1").classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Birthday confetti
function celebrate() {
  const symbols = ["✦", "★", "🎉", "✨", "💛", "🎊"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (Math.random() * 16 + 10) + "px";
    piece.style.animationDuration =
      (Math.random() * 2 + 2) + "s";

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 4500);
  }
}
