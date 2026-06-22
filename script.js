// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.mobile-menu-toggle').classList.remove('active');
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Show success message with animation
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
        }, 2000);
    });
}

// Input validation and focus effects
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// Add animation to skill cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(element => {
    observer.observe(element);
});

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill card hover effects
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Timeline item hover effects
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.timeline-dot').style.animation = 'none';
        this.querySelector('.timeline-dot').style.transform = 'translateX(-50%) scale(1.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.timeline-dot').style.animation = 'pulse 3s ease-in-out infinite';
        this.querySelector('.timeline-dot').style.transform = 'translateX(-50%) scale(1)';
    });
});

// Social link hover effects
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(99, 102, 241, 0.2)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.05)';
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: translateX(-50%) scale(1);
        opacity: 1;
    }
    50% {
        transform: translateX(-50%) scale(1.1);
        opacity: 0.8;
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes ripple {
    0% { width: 0; height: 0; opacity: 1; }
    100% { width: 200px; height: 200px; opacity: 0; }
}

@keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
}

@keyframes glow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    }
    50% {
        box-shadow: 0 0 40px rgba(99, 102, 241, 0.8);
    }
}
`;
document.head.appendChild(style);