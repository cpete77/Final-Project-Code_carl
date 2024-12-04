document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-grid img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            lightbox.style.position = "fixed";
            lightbox.style.top = "0";
            lightbox.style.left = "0";
            lightbox.style.width = "100%";
            lightbox.style.height = "100%";
            lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            lightbox.style.display = "flex";
            lightbox.style.alignItems = "center";
            lightbox.style.justifyContent = "center";
            lightbox.style.zIndex = "1000";
            lightbox.innerHTML = `<img src="${img.src}" style="max-width: 90%; max-height: 90%; border-radius: 10px;">`;
            lightbox.addEventListener("click", () => lightbox.remove());
            document.body.appendChild(lightbox);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const videoWrapper = document.querySelector(".video-wrapper");
    const videos = document.querySelectorAll(".video-wrapper video");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    const updateSlideshow = () => {
        const slideWidth = videos[0].clientWidth;
        videoWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        updateSlideshow();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % videos.length;
        updateSlideshow();
    });

    window.addEventListener("resize", updateSlideshow); 
});