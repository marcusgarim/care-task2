    <script>
        // Smooth scrolling
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

        // Neural network animation
        function createNeuralNetwork() {
            const network = document.querySelector('.neural-network');
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

        // Observe elements
        document.querySelectorAll('.solution-card, .diff-item, .flow-step').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Obrigado pelo contato! Entraremos em contato em breve.');
            this.reset();
        });

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    </script>