// Add this to the top of your script.js file
window.onload = function() {
  // Scroll to top
  window.scrollTo(0, 0);
  
  // For older browsers, add this as a fallback
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // Apply dark mode if it was active before refresh
  applyDarkModeIfSaved();
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark Mode Toggle Function
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  // Toggle class for all relevant elements
  document.querySelectorAll('a, .btn, .details-container, p, h1, h2, h3').forEach(element => {
    element.classList.toggle('dark-mode');
  });

  // Specifically handle icons
  document.querySelectorAll('.icon').forEach(icon => {
    icon.style.filter = body.classList.contains("dark-mode") ? "invert(1) brightness(100%)" : "none";
  });

  // Handle contact info container
  document.querySelectorAll('.contact-info-upper-container, .contact-info-container').forEach(container => {
    container.classList.toggle('dark-mode');
  });

  // Update button text
  darkModeToggle.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";

  // Save dark mode preference
  localStorage.setItem('darkMode', body.classList.contains("dark-mode"));
}

function applyDarkModeIfSaved() {
  if (localStorage.getItem('darkMode') === 'true') {
    toggleDarkMode();
  }
}

darkModeToggle.addEventListener("click", toggleDarkMode);
