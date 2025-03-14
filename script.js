document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    
    // Функция, которая делает видимым блок при прокрутке
    function checkVisibility() {
        const scrollY = window.scrollY;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            if (scrollY + window.innerHeight > sectionTop + 500) { // Появление при 500px
                section.style.opacity = 1; // Делаем блок видимым
            }
        });
    }

    // Слушаем событие прокрутки
    window.addEventListener('scroll', checkVisibility);

    // Инициализация прокрутки на странице
    checkVisibility();
});


