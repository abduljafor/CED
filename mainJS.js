const petals = document.querySelectorAll('.petal');

petals.forEach(petal => {
  const startX = Math.random() * window.innerWidth;
  const endX = Math.random() * window.innerWidth;
  const delay = Math.random() * 5; // Up to 5 seconds delay
  const duration = 5 + Math.random() * 5; // 5 to 10 seconds duration

  petal.style.setProperty('--start-x', `${startX}px`);
  petal.style.setProperty('--end-x', `${endX}px`);
  petal.style.animationDelay = `${delay}s`;
  petal.style.animationDuration = `${duration}s`;
});

// =======
// Batas 
// =======

const startDate = new Date('2022-11-22');

function updateCounter() {
  const now = new Date();

  // Total selisih waktu dalam milidetik
  const totalMilliseconds = now - startDate;
  const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));

  // --- Logika modular ---
  let years = Math.floor(totalDays / 365);
  let remainingDaysAfterYears = totalDays % 365;

  let months = Math.floor(remainingDaysAfterYears / 30);
  let remainingDaysAfterMonths = remainingDaysAfterYears % 30;

  let weeks = Math.floor(remainingDaysAfterMonths / 7);
  let days = remainingDaysAfterMonths % 7;

  // --- Koreksi rollover otomatis ---
  if (days >= 7) {
    weeks += Math.floor(days / 7);
    days = days % 7;
  }

  if (weeks >= 4) {
    months += Math.floor(weeks / 4);
    weeks = weeks % 4;
  }

  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  // --- Update ke elemen HTML ---
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('weeks').textContent = weeks;
  document.getElementById('days').textContent = days;
}

// Jalankan pertama kali & perbarui setiap jam
updateCounter();
setInterval(updateCounter, 1000 * 60 * 60);



// ======
// BATAS
// ======

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('div a');

document.getElementById("radio-1").addEventListener("change", () => {
    document.getElementById("beranda").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("radio-2").addEventListener("change", () => {
    document.getElementById("prolog1").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("radio-3").addEventListener("change", () => {
    document.getElementById("galeri2").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("radio-4").addEventListener("change", () => {
    document.getElementById("surat1").scrollIntoView({ behavior: "smooth" });
});

// ======
// BATAS
// ======

document.addEventListener('DOMContentLoaded', function() {
  const columns = document.querySelectorAll('.col-image');

  columns.forEach(column => {
    const images = Array.from(column.querySelectorAll('.image-wrap'));
    const cloneSet = images.map(img => img.cloneNode(true));

    // Append the cloned set for seamless looping
    cloneSet.forEach(clone => column.appendChild(clone));
  });
});