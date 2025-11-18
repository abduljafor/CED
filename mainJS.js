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

  // SALIN tanggal supaya bisa dimodifikasi
  let y = startDate.getFullYear();
  let m = startDate.getMonth();
  let d = startDate.getDate();

  // Hitung selisih tahun
  let years = now.getFullYear() - y;
  // jika bulan/hari sekarang belum lewat dari bulan/hari start → tahun dikurangi
  if (
    now.getMonth() < m ||
    (now.getMonth() === m && now.getDate() < d)
  ) {
    years--;
  }

  // Hitung tanggal setelah menambah 'years'
  let temp = new Date(startDate);
  temp.setFullYear(startDate.getFullYear() + years);

  // Hitung selisih bulan
  let months = now.getMonth() - temp.getMonth();
  if (now.getDate() < temp.getDate()) {
    months--;
  }
  if (months < 0) months += 12;

  // Hitung tanggal setelah menambah 'months'
  temp.setMonth(temp.getMonth() + months);

  // Hitung sisa hari
  let diffMs = now - temp;
  let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Jadikan weeks + days
  let weeks = Math.floor(diffDays / 7);
  let days = diffDays % 7;

  // Update HTML
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('weeks').textContent = weeks;
  document.getElementById('days').textContent = days;
}

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
