(() => {
  const $ = (id) => document.getElementById(id);
  const heartsLayer = $("heartsLayer");
  const toast = $("toast");
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
  }

  function makeHeart() {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♡", "♥", "💗", "💕", "💖"][Math.floor(Math.random() * 5)];
    heart.style.left = `${4 + Math.random() * 92}%`;
    heart.style.setProperty("--size", `${14 + Math.random() * 20}px`);
    heart.style.setProperty("--duration", `${3 + Math.random() * 2.5}s`);
    heartsLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }

  function heartBurst(count = 18) {
    for (let i = 0; i < count; i++) setTimeout(makeHeart, i * 65);
  }

  $("enterBtn").addEventListener("click", () => {
    $("surprise").classList.remove("hidden");
    $("home").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    heartBurst(24);
  });

  $("backBtn").addEventListener("click", () => {
    $("surprise").classList.add("hidden");
    $("home").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("againBtn").addEventListener("click", () => {
    heartBurst(32);
    showToast("A little shower of hearts for Thangoo! 💗");
  });

  $("heartBtn").addEventListener("click", () => {
    heartBurst(24);
    showToast("Sending hearts to Thangoo 💕");
  });
})();
