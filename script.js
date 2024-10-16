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

darkModeToggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  // Toggle class for all relevant elements
  document.querySelectorAll('a').forEach(link => {
    link.classList.toggle('dark-mode');
  });

  document.querySelectorAll('.btn').forEach(button => {
    button.classList.toggle('dark-mode');
  });

  document.querySelectorAll('.details-container').forEach(container => {
    container.classList.toggle('dark-mode');
  });

  document.querySelectorAll('p, h1, h2, h3').forEach(text => {
    text.classList.toggle('dark-mode');
  });

  // Specifically handle icons
  document.querySelectorAll('.icon').forEach(icon => {
    if (body.classList.contains("dark-mode")) {
      icon.style.filter = "invert(1) brightness(100%)";
    } else {
      icon.style.filter = "none";
    }
  });

  // Handle contact info container
  document.querySelectorAll('.contact-info-upper-container, .contact-info-container').forEach(container => {
    container.classList.toggle('dark-mode');
  });

  // Footer and nav specific inversion for text color
  document.querySelectorAll('footer a, nav a').forEach(link => {
    link.classList.toggle('dark-mode');
  });

  // Update button text
  darkModeToggle.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";

  // Update contact info container styles
  document.querySelectorAll('.contact-info-container a').forEach(link => {
    link.classList.toggle('dark-mode');
  });
});
