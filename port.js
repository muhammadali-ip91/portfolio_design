document.addEventListener('DOMContentLoaded', function() {
    // Theme Switching
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            body.className = `${theme}-theme`;
            
            // Update active button
            themeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '20px 0';
        }
    });

    // Initialize skill level indicators
    const levelIndicators = document.querySelectorAll('.level-indicator');
    
    levelIndicators.forEach(indicator => {
        const level = indicator.getAttribute('data-level');
        indicator.style.width = `${level}%`;
    });

    // Slider functionality for skills and certificates
    function setupSlider(containerSelector, itemSelector, prevBtnSelector, nextBtnSelector) {
        const container = document.querySelector(containerSelector);
        const items = document.querySelectorAll(`${containerSelector} ${itemSelector}`);
        const prevBtn = document.querySelector(prevBtnSelector);
        const nextBtn = document.querySelector(nextBtnSelector);
        
        if (!container || items.length === 0) return;
        
        let currentIndex = 0;
        const itemWidth = items[0].offsetWidth + 30; // Including gap
        
        function updateSlider() {
            container.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            itemWidth = items[0].offsetWidth + 30;
            updateSlider();
        });
    }
    
    setupSlider('.skills-slider', '.skill-card', '.skills-container .left-arrow', '.skills-container .right-arrow');
    setupSlider('.certificates-slider', '.certificate-card', '.certificates-container .left-arrow', '.certificates-container .right-arrow');

    // Download CV button
    const downloadBtn = document.querySelector('.download-cv');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real implementation, this would link to your actual CV file
        alert('Downloading CV... (This is a demo)');
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent! (This is a demo)');
            this.reset();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for subscribing! (This is a demo)');
            this.reset();
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animated-text, .animated-text-delay, .animated-text-delay-2, .animated-text-delay-3');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.animationPlayState = 'running';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});