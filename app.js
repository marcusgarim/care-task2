// Aguardar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling melhorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Smooth scroll nativo
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Neural network animation
    function createNeuralNetwork() {
        const network = document.querySelector('.neural-network');
        if (!network) return;
        
        const nodeCount = 20;

        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.classList.add('neural-node');
            node.style.left = `${Math.random() * 100}%`;
            node.style.top = `${Math.random() * 100}%`;
            node.style.animationDelay = `${Math.random() * 3}s`;
            network.appendChild(node);
        }
    }

    // Inicializar rede neural
    createNeuralNetwork();

    // Animate on scroll
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

    // Observe elements for scroll animations
    document.querySelectorAll('.solution-card, .diff-item, .flow-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Animação de feedback
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.style.opacity = '0.7';
            
            // Simular envio
            setTimeout(() => {
                alert('Obrigado pelo contato! Entraremos em contato em breve.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = '1';
            }, 1000);
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            
            // Animação do botão hamburger
            this.classList.toggle('active');
        });
        
        // Fechar menu mobile ao clicar nos links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Highlight do menu ativo baseado na seção visível
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Destacar link ativo no menu
        navLinksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect sutil no hero (opcional)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVideo = document.querySelector('.hero-video');
        
        if (heroVideo && scrolled < window.innerHeight) {
            heroVideo.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Efeito de typing no título (opcional)
    function typeWriter(element, text, speed = 100) {
        if (!element) return;
        
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

    // Contador animado para estatísticas (opcional)
    function animateCounter(element, target, duration = 2000) {
        if (!element) return;
        
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Lazy loading para vídeos (opcional)
    const videos = document.querySelectorAll('video[data-src]');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.dataset.src;
                video.load();
                videoObserver.unobserve(video);
            }
        });
    });

    videos.forEach(video => {
        videoObserver.observe(video);
    });

    // Scroll reveal animation para seções
    const revealElements = document.querySelectorAll('.section-header, .chart-container, .comparison-table');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease';
        revealObserver.observe(el);
    });

    // Performance: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Aplicar throttle nos eventos de scroll se necessário
    const throttledScrollHandler = throttle(() => {
        // Scroll handlers que precisam de throttling
        console.log('Scroll event throttled');
    }, 100);

    // window.addEventListener('scroll', throttledScrollHandler);

    console.log('🚀 Docli website loaded successfully!');
});