const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.2)';
        tag.style.transition = 'transform 0.3s ease';
        tag.style.cursor = 'default';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
        tag.style.cursor = 'default';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let videos = document.querySelectorAll('video');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.load();
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        video.muted = true; 
        observer.observe(video);
    });
});