window.addEventListener('load', function() {
  const spinner = document.querySelector('.logo-spinner');
  
  // Minimum display time: 1.2s (matches animation cycle)
  setTimeout(() => {
    spinner.classList.add('loaded');
    
    // Remove after fade-out
    setTimeout(() => spinner.remove(), 500);
  }, 1200);
});
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.mobile-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Improved AOS implementation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-aos]');
    
    // Set initial state only if not already animated
    elements.forEach(el => {
        if (!el.classList.contains('aos-animate')) {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Reset transform based on animation type
            const animation = el.dataset.aos;
            if (animation === 'fade-up') el.style.transform = 'translateY(30px)';
            if (animation === 'fade-down') el.style.transform = 'translateY(-30px)';
            if (animation === 'fade-right') el.style.transform = 'translateX(-30px)';
            if (animation === 'fade-left') el.style.transform = 'translateX(30px)';
            if (animation === 'zoom-in') el.style.transform = 'scale(0.6)';
        }
    });

    // Run initial check
    checkAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkAnimations);
});

function checkAnimations() {
    const elements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top + scrollPosition;
        
        if (scrollPosition > (elementPosition - windowHeight + 100)) {
            const delay = el.dataset.aosDelay || 0;
            
            setTimeout(() => {
                el.classList.add('aos-animate');
                el.style.opacity = '1';
                el.style.transform = '';
            }, delay);
        }
    });
}

// Additional Animation Effects
function addHoverEffects() {
    // Service card hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.service-icon').style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.service-icon').style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Product card hover effect
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
    initAOS();
    handleScrollAnimations();
    addHoverEffects();
});