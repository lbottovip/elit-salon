/* ===== ✨ ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ (FADE-IN) ===== */
document.addEventListener('DOMContentLoaded', () => {

    // Элементы, которые будут появляться при скролле
    const fadeElements = document.querySelectorAll(
        '.feature, .master-card, .service-card, .contacts-card, ' +
        '.promo-item, .about-text, .video-wrapper, .social-btn, ' +
        '.page-title, .page-subtitle, .hero h1, .hero-subtitle, ' +
        '.price-photo img, .contacts-card'
    );

    // Добавляем класс для анимации
    fadeElements.forEach(el => el.classList.add('fade-in-element'));

    // IntersectionObserver — следит, когда элемент попадает в экран
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  // анимируем один раз
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));

    /* ===== 🎬 АНИМАЦИЯ СЧЁТЧИКОВ ===== */
    const counters = document.querySelectorAll('.counter-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target || el.textContent);
                const duration = 1800;      // 1.8 сек — длительность анимации
                const stepTime = 16;         // ~60 fps
                const steps = duration / stepTime;
                const increment = target / steps;

                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target.toLocaleString('ru-RU');
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current).toLocaleString('ru-RU');
                    }
                }, stepTime);

                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    /* ===== 🌸 ПЛАВАЮЩАЯ КНОПКА МЕССЕНДЖЕРОВ ===== */
    // (функция toggleFab — глобальная, в base.html)
    document.addEventListener('click', (e) => {
        const fab = document.querySelector('.fab-container');
        if (fab && !e.target.closest('.fab-container')) {
            fab.classList.remove('open');
        }
    });

    /* ===== 💫 HOVER-ЭФФЕКТ НА ЛОГОТИП ===== */
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.05) rotate(-2deg)';
            logo.style.transition = 'transform 0.4s ease';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(0)';
        });
    }

});

/* ===== 🌸 ФУНКЦИЯ ПЛАВАЮЩЕЙ КНОПКИ ===== */
function toggleFab(event) {
    event.stopPropagation();
    const fab = document.querySelector('.fab-container');
    fab.classList.toggle('open');
}