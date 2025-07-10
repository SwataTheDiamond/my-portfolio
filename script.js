// === SMOOTH SCROLL FOR NAV LINKS ===
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// === DARK MODE TOGGLE ===
const themeToggleBtn = document.getElementById('themeToggle');

// Load user's saved preference (if any)
const darkModePref = localStorage.getItem('darkMode') === 'true';

// Apply saved theme on page load
if (darkModePref) {
  document.body.classList.add('dark');
  themeToggleBtn.textContent = '☀️ Light Mode';
} else {
  themeToggleBtn.textContent = '🌙 Dark Mode';
}

// Toggle dark mode on button click
themeToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
  themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});


// === SECTION REVEAL ANIMATION ON SCROLL ===
const revealSections = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

// Run on load and scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// === OPTIONAL: LOG CONTACT CLICKS (You can replace this with form logic) ===
const contactLink = document.querySelector('a[href="#contact"]');
if (contactLink) {
  contactLink.addEventListener('click', () => {
    console.log("User clicked on Contact link.");
  });
}

