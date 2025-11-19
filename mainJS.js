const petals = document.querySelectorAll('.petal');

petals.forEach(petal => {
  const startX = Math.random() * window.innerWidth;
  const endX = Math.random() * window.innerWidth;
  const delay = Math.random() * 5; 
  const duration = 5 + Math.random() * 5; 

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
  let tempDate = new Date(startDate);

  let years = 0;
  while (true) {
    let nextYear = new Date(tempDate);
    nextYear.setFullYear(tempDate.getFullYear() + 1);
    
    if (nextYear <= now) {
      years++;
      tempDate = nextYear;
    } else {
      break;
    }
  }

  let months = 0;
  while (true) {
    let nextMonth = new Date(tempDate);
    nextMonth.setMonth(tempDate.getMonth() + 1);
    
    if (nextMonth.getDate() !== tempDate.getDate()) {
      nextMonth.setDate(0);
    }

    if (nextMonth <= now) {
      months++;
      tempDate = nextMonth;
    } else {
      break;
    }
  }

  let diffMs = now - tempDate;

  let days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  diffMs -= days * (1000 * 60 * 60 * 24);

  let hours = Math.floor(diffMs / (1000 * 60 * 60));

  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
}

updateCounter();

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

    cloneSet.forEach(clone => column.appendChild(clone));
  });

});



