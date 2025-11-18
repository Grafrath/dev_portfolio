// portfolio_script.js

function initFadeSmart() {
    const elements = document.querySelectorAll(".fade-smart");
    let lastScroll = 0;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const el = entry.target;
            const scrollDown = window.scrollY > lastScroll;
            lastScroll = window.scrollY;

            if (entry.isIntersecting) {
                const index = [...elements].indexOf(el);
                el.style.transitionDelay = index * 0.15 + "s";
                el.classList.add("show");
            } else {
                el.classList.remove("show");
            }
        });
    }, { threshold: 0.25 });

    elements.forEach(el => observer.observe(el));
}

// SPA 초기에도 바로 실행될 수 있도록 함
document.addEventListener("DOMContentLoaded", initFadeSmart);
