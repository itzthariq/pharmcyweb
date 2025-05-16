// AOS (Animate On Scroll) Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    initAOS();
    
    // Add scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
});

function initAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    
    // Set initial state
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top + scrollPosition;
        const elementHeight = el.offsetHeight;
        
        // Check if element is in viewport
        if (scrollPosition > (elementPosition - windowHeight + 100)) {
            // Get animation type
            const animation = el.dataset.aos;
            const delay = el.dataset.aosDelay || 0;
            
            // Apply animation after delay
            setTimeout(() => {
                el.classList.add('aos-animate');
                
                // Remove attribute to prevent re-animation
                el.removeAttribute('data-aos');
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