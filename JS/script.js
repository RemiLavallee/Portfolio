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