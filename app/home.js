// ==================== SMOOTH SCROLLING FOR NAVIGATION LINKS ====================
// This makes clicking on navigation links scroll smoothly to the section
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

// ==================== ACTIVE NAVIGATION LINK HIGHLIGHTING ====================
// This highlights the current section in the navigation menu based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    // Check which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    // Update active class on navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== HELP BUTTON FUNCTION ====================
// This function is called when the help button is clicked
// Customize the alert message here with your contact information
function showHelp() {
    alert('Need help? Contact us at:\n\nEmail: info@businesspro.com\nPhone: (555) 123-4567\n\nOr click "Get a Quote" to get started!');
}

// ==================== PAGE LOAD ANIMATIONS ====================
// Add entrance animations when the page loads
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
    
    if (heroImage) {
        heroImage.style.animation = 'fadeInRight 0.8s ease-out 0.2s both';
    }
});

// ==================== ADDITIONAL INTERACTIVE FEATURES ====================
// You can add more JavaScript functionality here as needed

// Example: Log when buttons are clicked (useful for tracking)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Button clicked:', this.textContent.trim());
    });
});

// Example: Add parallax effect on scroll (optional - uncomment to enable)
/*
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
*/