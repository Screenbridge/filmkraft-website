/**
 * FILMKRAFT - Advanced Animations
 * GSAP ScrollTrigger & Lenis Smooth Scroll
 */

// Wait for DOM and libraries to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons first
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Lenis smooth scroll disabled for native trackpad support
    // Uncomment below if you want smooth scroll with mouse wheel only
    /*
    const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 1.5,
        wheelMultiplier: 0.8,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    */

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // HERO VIDEO FADE IN
    // ==========================================
    if (document.querySelector('.hero-video-element')) {
        gsap.from('.hero-video-element', {
            scale: 1.2,
            duration: 2,
            ease: 'power2.out',
        });
    }

    // ==========================================
    // SCROLL TRIGGERED FADE-IN ANIMATIONS
    // ==========================================
    gsap.utils.toArray('.fade-in').forEach((element) => {
        const delay = element.style.getPropertyValue('--delay') || '0s';
        const delayValue = parseFloat(delay) * 1000;

        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: delayValue / 1000,
            ease: 'power2.out',
        });
    });

    // ==========================================
    // FADE-IN FROM LEFT/RIGHT
    // ==========================================
    gsap.utils.toArray('.fade-in-left').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: 'power2.out',
        });
    });

    gsap.utils.toArray('.fade-in-right').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
            },
            opacity: 0,
            x: 50,
            duration: 1,
            ease: 'power2.out',
        });
    });

    // ==========================================
    // SCALE-IN ANIMATIONS
    // ==========================================
    gsap.utils.toArray('.scale-in').forEach((element) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'back.out(1.2)',
        });
    });

    // ==========================================
    // PARALLAX EFFECTS
    // ==========================================
    gsap.utils.toArray('.parallax').forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
            ease: 'none',
        });
    });

    // ==========================================
    // WORK CARDS - VIDEO HOVER AUTOPLAY
    // ==========================================
    const workCards = document.querySelectorAll('.work-card');
    
    workCards.forEach((card) => {
        const video = card.querySelector('.work-video');
        
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch((err) => {
                    console.log('Video autoplay prevented:', err);
                });
            });
            
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });

    // ==========================================
    // ANIMATED COUNTER FOR STATS
    // ==========================================
    gsap.utils.toArray('.counter').forEach((counter) => {
        const target = parseInt(counter.dataset.target);
        const suffix = counter.dataset.suffix || '';
        
        gsap.from(counter, {
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
            },
            textContent: 0,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            onUpdate: function () {
                counter.textContent = Math.ceil(counter.textContent) + suffix;
            },
        });
    });

    // ==========================================
    // STICKY NAV SHRINK ON SCROLL
    // ==========================================
    const nav = document.querySelector('.nav');
    
    if (nav) {
        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            toggleClass: { className: 'nav-scrolled', targets: '.nav' },
        });
    }

    // ==========================================
    // CUSTOM CURSOR (Desktop only)
    // ==========================================
    if (window.innerWidth > 968) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.className = 'custom-cursor-dot';
        document.body.appendChild(cursorDot);

        let mouseX = 0,
            mouseY = 0;
        let cursorX = 0,
            cursorY = 0;
        let dotX = 0,
            dotY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor follow
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursorDot.style.left = dotX + 'px';
            cursorDot.style.top = dotY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .work-card');
        
        hoverElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });
    }

    // ==========================================
    // WORK GRID BACKGROUND ANIMATION
    // ==========================================
    const workGridBg = document.querySelector('.work-grid-background');
    
    if (workGridBg) {
        gsap.to(workGridBg, {
            scrollTrigger: {
                trigger: '.work-grid',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
            rotation: 360,
            scale: 1.2,
            ease: 'none',
        });
    }

    // ==========================================
    // SMOOTH ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });

    // ==========================================
    // REFRESH SCROLLTRIGGER ON LOAD
    // ==========================================
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // ==========================================
    // LUCIDE ICONS INITIALIZATION
    // ==========================================
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ==========================================
    // FAQ ACCORDION
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach((faq) => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    console.log('🎬 Filmkraft animations initialized');
});
