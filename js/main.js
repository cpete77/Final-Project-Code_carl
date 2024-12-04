document.querySelector('.cta-btn').addEventListener('click', () => {
    window.location.href = "resume.html";
  });

  const stats = [
    { id: "experience", value: 8 },
    { id: "countries", value: 9 },
    { id: "parks", value: 16 },
    { id: "ski", value: 25}
  ];
  
  stats.forEach(stat => {
    let count = 0;
    const increment = stat.value / 100;
    const interval = setInterval(() => {
      count += increment;
      document.getElementById(stat.id).textContent = Math.floor(count);
      if (count >= stat.value) clearInterval(interval);
    }, 20);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    if (!carousel) {
      console.error("Carousel element not found.");
      return;
    }
  
    let offset = 0;
  
    
    function shiftImages() {
      const firstImage = carousel.querySelector('img');
      const computedStyle = getComputedStyle(firstImage);
      const margin = parseInt(computedStyle.marginLeft) + parseInt(computedStyle.marginRight);
      const imageWidth = firstImage.clientWidth + margin;
  
      offset -= imageWidth;
  
      
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(${offset}px)`;
  
      
      setTimeout(() => {
        carousel.appendChild(firstImage);
        offset += imageWidth;
        carousel.style.transition = 'none'; 
        carousel.style.transform = `translateX(${offset}px)`;
      }, 500); 
    }
  
    
    setInterval(shiftImages, 3000); 
  });
