// app.js
        // Mobile Menu Toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-menu').classList.remove('active');
                }
            });
        });

        // Email Subscription Form
        document.getElementById('subscribe-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const messageElement = document.getElementById('subscribe-message');
            
            // In a real implementation, this would send data to Google Sheets
            // For demo purposes, we'll just show a success message
            messageElement.textContent = 'Thank you for subscribing!';
            messageElement.style.color = 'green';
            emailInput.value = '';
            
            // Reset message after 5 seconds
            setTimeout(() => {
                messageElement.textContent = '';
            }, 5000);
        });

        // Contact Form
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const messageElement = document.getElementById('form-message');
            
            // In a real implementation, this would send data to Google Sheets
            // For demo purposes, we'll just show a success message
            messageElement.textContent = 'Thank you for your message! We will get back to you soon.';
            messageElement.style.color = 'green';
            this.reset();
            
            // Reset message after 5 seconds
            setTimeout(() => {
                messageElement.textContent = '';
            }, 5000);
        });

        // Simple form validation
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('blur', function() {
                if(this.value.trim() === '' && this.hasAttribute('required')) {
                    this.style.borderColor = 'red';
                } else {
                    this.style.borderColor = '#ddd';
                }
            });
        });
