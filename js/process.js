// Dark mode toggle functionality
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
}

// Set initial dark mode based on local storage or system preference
if (localStorage.getItem('darkMode') === 'true' || 
    (localStorage.getItem('darkMode') === null && 
     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

// Language toggle functionality
function changeLanguage(lang) {
  console.log(`Changed language to: ${lang}`);
  // In a real implementation, you would update UI text based on selected language
}

// Configure Tailwind for dark mode
tailwind.config = {
  darkMode: 'class'
}



document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dotsContainer = document.getElementById('dots-container');
        
    const slides = banner.querySelectorAll('.w-screen.h-screen');
    const imageWidth = 100; // 100% width per image
    let currentIndex = 0;
    let autoScrollInterval;
        
    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'w-4 h-4 rounded-full bg-white bg-opacity-50 cursor-pointer transition-colors duration-300';
        if (index === 0) dot.classList.add('bg-opacity-100');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
        
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('div');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.remove('bg-opacity-50');
                dot.classList.add('bg-opacity-100');
            }
            else {
                dot.classList.remove('bg-opacity-100');
                dot.classList.add('bg-opacity-50');
            }});
        }
        
        function goToSlide(index) {
            currentIndex = index;
            banner.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
            updateDots();
            resetAutoScroll();
        }
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        }
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(currentIndex);
        }
        function startAutoScroll() {
            autoScrollInterval = setInterval(nextSlide, 5000);
        }
        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            startAutoScroll();
        }
        // Event listeners
        prevBtn.addEventListener('click', () => {
            prevSlide();
        });
        
        nextBtn.addEventListener('click', () => {
            nextSlide();
        });
        
        // Start auto-scrolling on page load
        startAutoScroll();
    });

    // link pages

    function goToPage(event, url) {
      event.preventDefault(); // Prevent the default anchor behavior
      window.location.href = url;
    }