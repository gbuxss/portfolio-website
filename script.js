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

// Add this function to handle scroll restoration
function handleScrollRestoration() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}

// Call this function when the page starts to unload
window.addEventListener('beforeunload', handleScrollRestoration);

// Also call it when the page has loaded
window.addEventListener('load', handleScrollRestoration);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Existing desktop dark mode toggle
const desktopDarkModeToggle = document.getElementById("dark-mode-toggle");
// New mobile dark mode toggle
const mobileDarkModeToggle = document.getElementById("mobile-dark-mode-toggle");
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    
    // Toggle dark mode for specific elements
    document.querySelectorAll('nav, footer, a, .btn, .details-container, p, h1, h2, h3, .contact-info-upper-container, .contact-info-container')
        .forEach(element => element.classList.toggle('dark-mode'));
    
    // Handle icons
    document.querySelectorAll('.icon').forEach(icon => {
        icon.style.filter = body.classList.contains("dark-mode") ? "invert(1) brightness(100%)" : "none";
    });
    
    // Update button text for both toggles
    const buttonText = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
    desktopDarkModeToggle.textContent = buttonText;
    mobileDarkModeToggle.textContent = buttonText;
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', body.classList.contains("dark-mode"));
}

// Function to apply saved dark mode preference
function applyDarkModeIfSaved() {
    if (localStorage.getItem('darkMode') === 'true') {
        if (!body.classList.contains("dark-mode")) {
            toggleDarkMode();
        }
    } else {
        if (body.classList.contains("dark-mode")) {
            toggleDarkMode();
        }
    }
}

// Keep existing desktop event listener
desktopDarkModeToggle.addEventListener("click", toggleDarkMode);

// Add event listener for mobile toggle
mobileDarkModeToggle.addEventListener("click", toggleDarkMode);

// Apply saved dark mode preference on page load
window.addEventListener('load', () => {
    applyDarkModeIfSaved();
    
    // Scroll to top
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Handle scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});
