document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        items[currentIndex].classList.remove('active');
        currentIndex = (index + items.length) % items.length;
        items[currentIndex].classList.add('active');
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Optional: auto-slide functionality
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Change slide every 3 seconds
});