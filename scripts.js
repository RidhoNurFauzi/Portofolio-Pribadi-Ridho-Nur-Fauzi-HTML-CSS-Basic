document.addEventListener("DOMContentLoaded", function () {
  // === Script Bintang Pastel ===
  const starsContainer = document.querySelector(".stars");
  if (starsContainer) {
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
  }

  // === Script Form dengan Popup ===
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // cegah redirect ke Formspree

      // ambil nilai input
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // validasi kosong
      if (!name || !email || !subject || !message) {
        alert("❌ Semua kolom harus diisi sebelum mengirim!");
        return;
      }

      // validasi email sederhana
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!emailPattern.test(email)) {
        alert("❌ Format email tidak valid!");
        return;
      }

      // kirim ke Formspree via fetch
      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          alert("✅ Pesan berhasil dikirim!");
          form.reset();
        } else {
          const result = await response.json();
          console.error("Formspree error:", result);
          alert("❌ Terjadi kesalahan: " + (result.error || "coba lagi."));
        }
      } catch (error) {
        console.error("Network error:", error);
        alert("❌ Gagal terhubung ke server.");
      }
    });
  }
});
