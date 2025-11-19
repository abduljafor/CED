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
const startDate = new Date('2022-11-20T00:00:00');

function updateCounter() {
  const now = new Date();
  
  // Gunakan 'tempDate' sebagai kursor yang kita majukan pelan-pelan dari start ke now
  let tempDate = new Date(startDate);
  
  // 1. HITUNG TAHUN
  let years = 0;
  while (true) {
    // Coba tambah 1 tahun ke depan
    let nextYear = new Date(tempDate);
    nextYear.setFullYear(tempDate.getFullYear() + 1);
    
    // Jika tanggal setahun ke depan masih lebih kecil dari SEKARANG, simpan & lanjut
    if (nextYear <= now) {
      years++;
      tempDate = nextYear; // Majukan kursor
    } else {
      break; // Stop jika sudah lewat
    }
  }

  // 2. HITUNG BULAN
  let months = 0;
  while (true) {
    // Coba tambah 1 bulan ke depan
    let nextMonth = new Date(tempDate);
    nextMonth.setMonth(tempDate.getMonth() + 1);
    
    // PENTING: Koreksi tanggal jika loncat bulan (misal 31 Jan -> 28 Feb)
    // Jika tanggalnya berubah (misal dari tgl 31 jadi tgl 2), kembalikan ke akhir bulan sebelumnya
    if (nextMonth.getDate() !== tempDate.getDate()) {
        nextMonth.setDate(0);
    }
    
    if (nextMonth <= now) {
      months++;
      tempDate = nextMonth; // Majukan kursor
    } else {
      break;
    }
  }

  // 3. HITUNG SISA HARI (Dari selisih waktu dalam milidetik)
  let diffMs = now - tempDate;
  // Konversi milidetik sisa ke jumlah hari bulat
  let totalDaysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // 4. PECAH JADI WEEKS & DAYS
  let weeks = Math.floor(totalDaysLeft / 7);
  let days = totalDaysLeft % 7;

  // Update HTML
  // Gunakan TextContent agar lebih ringan daripada InnerHTML
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('weeks').textContent = weeks;
  document.getElementById('days').textContent = days;
}

// Panggil sekali saat halaman dimuat agar tidak menunggu 1 detik
updateCounter();

// Ubah interval menjadi 1000ms (1 detik) agar real-time
// Ini memastikan saat jam 00:00 malam, hari langsung bertambah
setInterval(updateCounter, 1000);


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

