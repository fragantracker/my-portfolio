// Custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    let cursorVisible = true;
    let cursorTimeout;

    const updateCursorPosition = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // Show cursor
        if (!cursorVisible) {
            cursor.style.opacity = '1';
            cursorVisible = true;
        }

        // Hide cursor after 3 seconds of inactivity
        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            cursor.style.opacity = '0';
            cursorVisible = false;
        }, 3000);
    };

    const updateCursorState = (e) => {
        const target = e.target;
        const isHoverable = target.matches('a, button, .image-hover, .hover-trigger');
        cursor.classList.toggle('hover', isHoverable);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', updateCursorState);

    // Hide cursor when it leaves the window
    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget) {
            cursor.style.opacity = '0';
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add parallax effect to hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});