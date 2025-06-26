const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    document.addEventListener('DOMContentLoaded', function() {
      const carouselSlider = document.querySelector('.carousel-slider');
      const carouselItems = document.querySelectorAll('.carousel-item');
      let currentIndex = 0;
    
      
      function slideToNext() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    
        
        carouselSlider.style.transform = `translateX(-${currentIndex * 100}%)`; 
      }
    
      
      const interval = setInterval(slideToNext, 3000); // 每3秒切换一次
      
      
      const prevBtn = document.querySelector('.carousel-prev');
      const nextBtn = document.querySelector('.carousel-next');
      prevBtn.addEventListener('click', () => {
        clearInterval(interval);
        currentIndex--;
        if (currentIndex < 0) currentIndex = carouselItems.length - 1;
        slideToNext();
        setTimeout(() => { interval = setInterval(slideToNext, 3000); }, 3000); 
      });
      nextBtn.addEventListener('click', () => {
        clearInterval(interval);
        slideToNext();
        setTimeout(() => { interval = setInterval(slideToNext, 3000); }, 3000); // 自动恢复播放
      });
    });
    
    
    
    