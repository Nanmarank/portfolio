// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const closeBtn = document.getElementById("closeBtn");

menuToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
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

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .timeline-item, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Email.js integration
(function () {
    emailjs.init("Rs3P2OS-sC1_Du3ii");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const statusEl = document.getElementById("status");
    statusEl.innerText = "Sending... ⏳";
    statusEl.style.color = "#06b6d4";

    emailjs.sendForm("service_zmpk9rb", "template_o8ylz73", this)
        .then(function () {
            statusEl.innerText = "✅ Message sent successfully!";
            statusEl.style.color = "#10b981";
            document.getElementById("contact-form").reset();
        }, function (error) {
            statusEl.innerText = "❌ Failed to send. Try again!";
            statusEl.style.color = "#ef4444";
            console.error("EmailJS Error:", error);
        });
});

// Header background change on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('#home');
    const speed = scrolled * 0.5;
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Typing effect for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroText = document.querySelector('.home-text');
    const originalText = heroText.innerText;
    setTimeout(() => {
        typeWriter(heroText, originalText, 80);
    }, 1000);
});

// Skill cards hover effect
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) rotateY(5deg)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.overflow = 'visible';

    // Animate elements on load
    const elementsToAnimate = document.querySelectorAll('.home-content, .hero-image');
    elementsToAnimate.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});