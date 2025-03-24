// // Theme switching functionality
// const themeToggle = document.querySelector('.theme-toggle');
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// // Set initial theme
// document.documentElement.setAttribute('data-theme', 
//     localStorage.getItem('theme') || 
//     (prefersDark.matches ? 'dark' : 'light')
// );

// themeToggle.addEventListener('click', () => {
//     themeToggle.style.transform = 'scale(0.95)';
//     setTimeout(() => themeToggle.style.transform = '', 150);

//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
// });

// // Enhanced mobile menu functionality
// const mobileMenuBtn = document.querySelector('.mobile-menu');
// const navLinks = document.querySelector('.nav-links');

// mobileMenuBtn.addEventListener('click', () => {
//     const isOpen = navLinks.classList.contains('active');
//     const icon = mobileMenuBtn.querySelector('i');
    
//     // Toggle menu state
//     navLinks.classList.toggle('active');
    
//     // Update icon and button state
//     if (!isOpen) {
//         icon.className = 'ri-close-line';
//         mobileMenuBtn.setAttribute('aria-expanded', 'true');
//     } else {
//         icon.className = 'ri-menu-line';
//         mobileMenuBtn.setAttribute('aria-expanded', 'false');
//     }
// });

// // Close mobile menu when clicking outside
// document.addEventListener('click', (e) => {
//     if (!e.target.closest('.nav-links') && 
//         !e.target.closest('.mobile-menu') && 
//         navLinks.classList.contains('active')) {
//         navLinks.classList.remove('active');
//         mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
//         mobileMenuBtn.setAttribute('aria-expanded', 'false');
//     }
// });

// // Enhanced active link handling
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//         // Remove active class from all links
//         document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
//         // Add active class to clicked link
//         e.target.closest('.nav-link').classList.add('active');
        
//         // Close mobile menu after link click
//         if (window.innerWidth <= 768) {
//             navLinks.classList.remove('active');
//             mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
//             mobileMenuBtn.setAttribute('aria-expanded', 'false');
//         }
//     });
// });

// // Add animation to nav links
// const navLinkItems = document.querySelectorAll('.nav-link');
// navLinkItems.forEach((link, index) => {
//     link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
// });

// // Add hover effect to logo
// const logo = document.querySelector('.nav-logo');
// logo.addEventListener('mousemove', (e) => {
//     const bound = logo.getBoundingClientRect();
//     const x = e.clientX - bound.left;
//     const y = e.clientY - bound.top;
    
//     logo.style.setProperty('--x', `${x}px`);
//     logo.style.setProperty('--y', `${y}px`);
// });

// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(() => {
//       document.getElementById("about-heading").classList.remove("opacity-0", "translate-y-10");
//       document.getElementById("about-content").classList.remove("opacity-0", "translate-y-10");
//       document.getElementById("about-image").classList.remove("opacity-0", "scale-90");
//     }, 500);
//   });





// 🌙 Theme Switching
const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const root = document.documentElement;

// Set Initial Theme
const savedTheme = localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');
root.setAttribute('data-theme', savedTheme);

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => themeToggle.style.transform = '', 200);

    const newTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// 📱 Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✖' : '☰';
});

// Close Mobile Menu When Clicking Outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu') && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '☰';
    }
});

// 🚀 Smooth Navigation Link Active State
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.target.closest('.nav-link').classList.add('active');

        // Close menu on mobile
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '☰';
        }
    });
});

// 🎨 Add Entrance Animation to Navbar Links
document.querySelectorAll('.nav-link').forEach((link, index) => {
    link.style.animation = `fadeIn 0.5s ease ${index / 5 + 0.2}s forwards`;
});
