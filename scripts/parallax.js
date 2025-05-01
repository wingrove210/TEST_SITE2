document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const video = document.createElement('video');
        video.src = 'assets/video.mp4';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.className = 'bar-video';
        bar.appendChild(video);
    });
});

window.addEventListener('scroll', function () {
    const videos = document.querySelectorAll('.bar-video');
    const scrolled = window.scrollY;
    videos.forEach(video => {
        video.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
    });
});

window.addEventListener('scroll', function () {
    const video = document.querySelector('.parallax-video');
    const scrolled = window.scrollY;
    video.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
});