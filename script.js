document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');
    const sportCards = document.querySelectorAll('.sport-card');
    const categoryCards = document.querySelectorAll('.category-card');
    const authBtns = document.querySelectorAll('.auth-btn');
    const navMenuItems = document.querySelectorAll('.nav-menu li a');
    const logo = document.querySelector('.logo');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        if (searchBox.value.trim() !== '') {
            // You can replace this with actual search logic
            console.log('Arama yapılıyor: ' + searchBox.value);
            
            // Create a search results container
            displaySearchResults(searchBox.value);
            
            // Clear search box
            searchBox.value = '';
        }
    }
    
    function displaySearchResults(query) {
        // Sample function to display search results
        // You would replace this with actual search logic
        
        // Create mock results based on search query
        let resultsHTML = `
            <div class="search-results">
                <h3>"${query}" için arama sonuçları:</h3>
                <div class="result-item">
                    <h4>Galatasaray ${query} maçında zafer</h4>
                    <p>Galatasaray son ${query} karşılaşmasında rakibini 3-0 mağlup etti...</p>
                </div>
                <div class="result-item">
                    <h4>${query} transferi gündemde</h4>
                    <p>Galatasaray'ın ${query} transferi için görüşmelere başladığı iddia edildi...</p>
                </div>
            </div>
        `;
        
        // Check if results container already exists, remove if it does
        const existingResults = document.querySelector('.search-results');
        if (existingResults) {
            existingResults.remove();
        }
        
        // Create a new element for search results
        const resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';
        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.backgroundColor = '#FFCC00';
        resultsContainer.style.color = '#FF0000';
        resultsContainer.style.padding = '15px';
        resultsContainer.style.borderRadius = '10px';
        resultsContainer.style.margin = '20px auto';
        resultsContainer.style.maxWidth = '1000px';
        resultsContainer.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        
        // Add close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Kapat';
        closeBtn.style.backgroundColor = '#FF0000';
        closeBtn.style.color = '#FFCC00';
        closeBtn.style.border = 'none';
        closeBtn.style.padding = '8px 15px';
        closeBtn.style.borderRadius = '5px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.float = 'right';
        
        closeBtn.addEventListener('click', function() {
            resultsContainer.remove();
        });
        
        resultsContainer.prepend(closeBtn);
        
        // Add to page
        document.querySelector('.main-content').prepend(resultsContainer);
    }
    
    // Card click handlers
    sportCards.forEach(card => {
        card.addEventListener('click', function() {
            const sportTitle = this.querySelector('.sport-title').textContent;
            navigateToSection(sportTitle.toLowerCase());
        });
    });
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryTitle = this.querySelector('.category-title').textContent;
            navigateToSection(categoryTitle.toLowerCase());
        });
    });
    
    function navigateToSection(section) {
        // Sample navigation function
        console.log(`${section} sayfasına yönlendiriliyorsunuz...`);
        
        // You could replace this with actual navigation
        // window.location.href = `/${section}.html`;
        
        // For now, we'll just create a notification
        createNotification(`${section.toUpperCase()} sayfasına yönlendiriliyorsunuz...`);
    }
    
    // Authentication buttons
    authBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            showAuthModal(action);
        });
    });
    
    function showAuthModal(action) {
        // Create auth modal
        const modalContainer = document.createElement('div');
        modalContainer.className = 'auth-modal-container';
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '0';
        modalContainer.style.left = '0';
        modalContainer.style.width = '100%';
        modalContainer.style.height = '100%';
        modalContainer.style.backgroundColor = 'rgba(0,0,0,0.7)';
        modalContainer.style.display = 'flex';
        modalContainer.style.justifyContent = 'center';
        modalContainer.style.alignItems = 'center';
        modalContainer.style.zIndex = '1000';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'auth-modal';
        modalContent.style.backgroundColor = '#FFCC00';
        modalContent.style.padding = '30px';
        modalContent.style.borderRadius = '10px';
        modalContent.style.width = '90%';
        modalContent.style.maxWidth = '400px';
        modalContent.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        modalContent.style.position = 'relative';
        
        // Add form based on action type
        let formHTML = '';
        
        if (action === 'GİRİŞ YAP') {
            formHTML = `
                <h2 style="color: #FF0000; margin-bottom: 20px; text-align: center;">GİRİŞ YAP</h2>
                <form id="login-form">
                    <div style="margin-bottom: 15px;">
                        <label for="email" style="display: block; margin-bottom: 5px; color: #FF0000; font-weight: bold;">E-posta:</label>
                        <input type="email" id="email" style="width: 100%; padding: 10px; border: 2px solid #FF0000; border-radius: 5px;" required>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label for="password" style="display: block; margin-bottom: 5px; color: #FF0000; font-weight: bold;">Şifre:</label>
                        <input type="password" id="password" style="width: 100%; padding: 10px; border: 2px solid #FF0000; border-radius: 5px;" required>
                    </div>
                    <button type="submit" style="background-color: #FF0000; color: #FFCC00; border: none; padding: 12px 0; width: 100%; border-radius: 5px; font-weight: bold; cursor: pointer;">GİRİŞ YAP</button>
                    <p style="text-align: center; margin-top: 15px; color: #FF0000;">Şifrenizi mi unuttunuz? <a href="#" style="color: #FF0000; text-decoration: underline;">Şifremi Sıfırla</a></p>
                </form>
            `;
        } else {
            formHTML = `
                <h2 style="color: #FF0000; margin-bottom: 20px; text-align: center;">ÜYE OL</h2>
                <form id="register-form">
                    <div style="margin-bottom: 15px;">
                        <label for="name" style="display: block; margin-bottom: 5px; color: #FF0000; font-weight: bold;">Ad Soyad:</label>
                        <input type="text" id="name" style="width: 100%; padding: 10px; border: 2px solid #FF0000; border-radius: 5px;" required>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label for="email" style="display: block; margin-bottom: 5px; color: #FF0000; font-weight: bold;">E-posta:</label>
                        <input type="email" id="email" style="width: 100%; padding: 10px; border: 2px solid #FF0000; border-radius: 5px;" required>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <label for="password" style="display: block; margin-bottom: 5px; color: #FF0000; font-weight: bold;">Şifre:</label>
                        <input type="password" id="password" style="width: 100%; padding: 10px; border: 2px solid #FF0000; border-radius: 5px;" required>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label for="password-confirm" style="display: block; margin-bottom: 5px; color: #FF0000; font-weight: bold;">Şifre Tekrar:</label>
                        <input type="password" id="password-confirm" style="width: 100%; padding: 10px; border: 2px solid #FF0000; border-radius: 5px;" required>
                    </div>
                    <button type="submit" style="background-color: #FF0000; color: #FFCC00; border: none; padding: 12px 0; width: 100%; border-radius: 5px; font-weight: bold; cursor: pointer;">ÜYE OL</button>
                </form>
            `;
        }
        
        modalContent.innerHTML = formHTML;
        
        // Add close button
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '15px';
        closeButton.style.fontSize = '24px';
        closeButton.style.color = '#FF0000';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontWeight = 'bold';
        
        closeButton.addEventListener('click', function() {
            modalContainer.remove();
        });
        
        modalContent.appendChild(closeButton);
        modalContainer.appendChild(modalContent);
        document.body.appendChild(modalContainer);
        
        // Add form submission listener
        const form = modalContent.querySelector('form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            modalContainer.remove();
            createNotification(`${action} başarılı!`);
        });
    }
    
    // Notification function
    function createNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = '#FFCC00';
        notification.style.color = '#FF0000';
        notification.style.padding = '15px 20px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        notification.style.zIndex = '1000';
        notification.style.fontWeight = 'bold';
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
    
    // Add GS logo to the logo div
    if (logo) {
        logo.innerHTML = `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 24px; color: #FF0000;">GS</div>`;
    }
    
    // Navigation menu hover effects
    navMenuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Social media icons
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add image placeholders
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.src || img.src === '' || img.src === 'null') {
            // Set a placeholder color for GS (Red background with yellow logo)
            if (img.classList.contains('gs-logo')) {
                img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23FFCC00"/><text x="50" y="65" font-size="40" text-anchor="middle" fill="%23FF0000" font-weight="bold">GS</text></svg>';
            } else if (img.classList.contains('featured-image')) {
                img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23FF0000"/><text x="400" y="200" font-size="40" text-anchor="middle" fill="%23FFCC00" font-weight="bold">Galatasaray Haberleri</text></svg>';
            } else if (img.classList.contains('category-image')) {
                const category = img.closest('.category-card').querySelector('.category-title').textContent;
                img.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23FF0000"/><text x="200" y="110" font-size="30" text-anchor="middle" fill="%23FFCC00" font-weight="bold">${category}</text></svg>`;
            }
        }
    });
    
    // Add news carousel to featured news
    addNewsCarousel();
    
    function addNewsCarousel() {
        const featuredNews = document.querySelector('.main-feature');
        if (featuredNews) {
            // Create carousel container
            const carousel = document.createElement('div');
            carousel.className = 'news-carousel';
            carousel.style.width = '100%';
            carousel.style.height = '100%';
            carousel.style.position = 'relative';
            carousel.style.overflow = 'hidden';
            
            // Create news items
            const newsItems = [
                {
                    title: 'Galatasaray Avrupa\'da Zafer Peşinde',
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23FF0000"/><text x="400" y="200" font-size="40" text-anchor="middle" fill="%23FFCC00" font-weight="bold">Avrupa Zafer</text></svg>'
                },
                {
                    title: 'Yeni Transfer Anlaşması İmzalandı',
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23FF0000"/><text x="400" y="200" font-size="40" text-anchor="middle" fill="%23FFCC00" font-weight="bold">Transfer Haberi</text></svg>'
                },
                {
                    title: 'Derbi Öncesi Son Hazırlıklar',
                    image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23FF0000"/><text x="400" y="200" font-size="40" text-anchor="middle" fill="%23FFCC00" font-weight="bold">Derbi Hazırlık</text></svg>'
                }
            ];
            
            // Create carousel items
            newsItems.forEach((item, index) => {
                const newsItem = document.createElement('div');
                newsItem.className = 'carousel-item';
                newsItem.style.position = 'absolute';
                newsItem.style.top = '0';
                newsItem.style.left = `${index * 100}%`;
                newsItem.style.width = '100%';
                newsItem.style.height = '100%';
                newsItem.style.transition = 'transform 0.5s ease';
                
                newsItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background-color: rgba(255, 0, 0, 0.8); padding: 15px;">
                        <h3 style="color: #FFCC00; font-size: 1.5rem; text-align: center;">${item.title}</h3>
                    </div>
                `;
                
                carousel.appendChild(newsItem);
            });
            
            // Create navigation buttons
            const prevBtn = document.createElement('button');
            prevBtn.innerHTML = '&#10094;';
            prevBtn.style.position = 'absolute';
            prevBtn.style.top = '50%';
            prevBtn.style.left = '10px';
            prevBtn.style.transform = 'translateY(-50%)';
            prevBtn.style.zIndex = '2';
            prevBtn.style.backgroundColor = 'rgba(255, 204, 0, 0.7)';
            prevBtn.style.color = '#FF0000';
            prevBtn.style.border = 'none';
            prevBtn.style.borderRadius = '50%';
            prevBtn.style.width = '40px';
            prevBtn.style.height = '40px';
            prevBtn.style.fontSize = '18px';
            prevBtn.style.cursor = 'pointer';
            
            const nextBtn = document.createElement('button');
            nextBtn.innerHTML = '&#10095;';
            nextBtn.style.position = 'absolute';
            nextBtn.style.top = '50%';
            nextBtn.style.right = '10px';
            nextBtn.style.transform = 'translateY(-50%)';
            nextBtn.style.zIndex = '2';
            nextBtn.style.backgroundColor = 'rgba(255, 204, 0, 0.7)';
            nextBtn.style.color = '#FF0000';
            nextBtn.style.border = 'none';
            nextBtn.style.borderRadius = '50%';
            nextBtn.style.width = '40px';
            nextBtn.style.height = '40px';
            nextBtn.style.fontSize = '18px';
            nextBtn.style.cursor = 'pointer';
            
            carousel.appendChild(prevBtn);
            carousel.appendChild(nextBtn);
            
            // Clear and append carousel
            featuredNews.innerHTML = '';
            featuredNews.appendChild(carousel);
            
            // Carousel logic
            let currentSlide = 0;
            const items = carousel.querySelectorAll('.carousel-item');
            
            function goToSlide(n) {
                items.forEach(item => {
                    item.style.transform = `translateX(-${n * 100}%)`;
                });
                currentSlide = n;
            }
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % items.length;
                goToSlide(currentSlide);
            }
            
            function prevSlide() {
                currentSlide = (currentSlide - 1 + items.length) % items.length;
                goToSlide(currentSlide);
            }
            
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Auto-advance carousel
            setInterval(nextSlide, 5000);
        }
    }
    
    // Add a news ticker
    addNewsTicker();
    
    function addNewsTicker() {
        const headerSection = document.querySelector('.header');
        if (headerSection) {
            const tickerContainer = document.createElement('div');
            tickerContainer.className = 'news-ticker';
            tickerContainer.style.backgroundColor = '#FFCC00';
            tickerContainer.style.color = '#FF0000';
            tickerContainer.style.padding = '8px 0';
            tickerContainer.style.overflow = 'hidden';
            tickerContainer.style.whiteSpace = 'nowrap';
            tickerContainer.style.position = 'relative';
            
            const tickerContent = document.createElement('div');
            tickerContent.className = 'ticker-content';
            tickerContent.style.animation = 'ticker 30s linear infinite';
            tickerContent.style.display = 'inline-block';
            tickerContent.style.paddingLeft = '100%';
            
            // Add news items
            tickerContent.innerHTML = `
                <span style="margin-right: 50px; font-weight: bold;">🏆 Galatasaray UEFA Kupası Son 16 Turunda!</span>
                <span style="margin-right: 50px; font-weight: bold;">⚽ Yeni transfer bugün İstanbul'a geliyor</span>
                <span style="margin-right: 50px; font-weight: bold;">🏀 Basketbol takımımız liderliğe yükseldi</span>
                <span style="margin-right: 50px; font-weight: bold;">🏐 Voleybol takımı final için mücadele edecek</span>
            `;
            
            tickerContainer.appendChild(tickerContent);
            
            // Insert after header
            headerSection.parentNode.insertBefore(tickerContainer, headerSection.nextSibling);
            
            // Add keyframe animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
            `;
            document.head.appendChild(style);
        }
    }
});
