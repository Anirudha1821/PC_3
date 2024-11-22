// Show Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Scroll Animation
const elements = document.querySelectorAll('section, .teaser, .service-item, .case-study, .book-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elements.forEach((el) => observer.observe(el));

// Add CSS Class for Animation
document.querySelectorAll('.teaser, .service-item, .case-study, .book-item').forEach((item) => {
    item.classList.add('hidden');
});
// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});
// Smooth Scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


