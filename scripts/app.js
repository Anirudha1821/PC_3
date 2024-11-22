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
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        console.log("here.");
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // Ensures removal even if load is delayed
    }
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
// Testimonials Carousel
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

const updateCarousel = () => {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});
// Typing Animation
const messages = [
    "Elevating Legal Excellence",
    "Bespoke Publications for Law Firms",
    "Enhance Client Engagement Today"
];

let typingIndex = 0;
let charIndex = 0;

const typingEffect = document.getElementById('typing-effect');

const typeMessage = () => {
    const currentMessage = messages[typingIndex];
    if (charIndex < currentMessage.length) {
        typingEffect.textContent += currentMessage[charIndex];
        charIndex++;
        setTimeout(typeMessage, 100);
    } else {
        setTimeout(() => {
            charIndex = 0;
            typingEffect.textContent = '';
            typingIndex = (typingIndex + 1) % messages.length;
            typeMessage();
        }, 2000);
    }
};

typeMessage();
// Accordion Functionality
const accordionToggles = document.querySelectorAll('.accordion-toggle');

accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});


