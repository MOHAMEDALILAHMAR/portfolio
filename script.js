// A simple greeting message in the console to show it's working
console.log("Welcome to my portfolio! Built by a CS Student.");

// Loading Animation
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    }
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

// Mobile nav toggle
const nav = document.querySelector('nav');
const navToggle = document.getElementById('navToggle');

if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav-open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    nav.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// Add scrolled state to nav for shadow/solid background
window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.pageYOffset > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark/Light Mode Toggle
const createThemeToggle = () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle theme');
    toggleBtn.innerHTML = '🌙';
    document.body.appendChild(toggleBtn);
    
    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.innerHTML = '☀️';
    }
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            toggleBtn.innerHTML = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            toggleBtn.innerHTML = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
};

createThemeToggle();

// Initialize EmailJS
(function() {
    emailjs.init("Gao0vm2A-63Wrfq-w"); // Replace with your EmailJS public key
})();

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

if (contactForm) {
    const setStatus = (message, type = 'info') => {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.className = `form-status ${type}`;
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        setStatus('Sending your message...', 'info');
        
        // Send email using EmailJS
        emailjs.sendForm('service_vdxdzyf', 'template_gwcuxzz', contactForm)
            .then(() => {
                setStatus("Message sent! I'll get back to you soon.", 'success');
                contactForm.reset();
            }, (error) => {
                console.error('Failed to send message:', error);
                setStatus('Failed to send. Please try again or email me at dalilahmer1212@gmail.com', 'error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
    });
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Header doesn't need fade-in
const header = document.querySelector('header');
if (header) {
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
}

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Press 'T' to scroll to top
    if (e.key === 't' || e.key === 'T') {
        if (!e.target.matches('input, textarea')) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});