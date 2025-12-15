// app.js

/* --------------------------
   fade-smart: IntersectionObserver setup
   - initFadeSmart() 를 호출하면 현재 DOM의 .fade-smart 요소들을 관찰
   - 관찰 시 요소가 뷰포트에 들어오면 .show 추가
---------------------------*/
let _fadeObserver = null;

function initFadeSmart() {
    // 한번만 생성
    if (!_fadeObserver) {
        _fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    // 사라질 때 다시 제거하고 싶지 않으면 이 줄 제거
                    entry.target.classList.remove('show');
                }
            });
        }, { threshold: 0.2 });
    }

    // observe all current .fade-smart elements
    document.querySelectorAll('.fade-smart').forEach(el => {
        _fadeObserver.observe(el);
    });
}

// small helper to force show with slight stagger immediately after insert
function revealOnLoadStagger(root = document, delay = 80) {
    const nodes = Array.from(root.querySelectorAll('.fade-smart'));
    nodes.forEach((el, i) => {
        setTimeout(() => el.classList.add('show'), i * delay);
    });
}

/* --------------------------
   loadPage: fetch html and insert into #app
---------------------------*/
async function loadPage(pageName) {
    const app = document.getElementById('app');
    try {
        const res = await fetch(`pages/${pageName}.html`, { cache: 'no-store' });
        if (!res.ok) throw new Error('네트워크 응답 실패');
        const html = await res.text();
        app.innerHTML = html;

        // 관찰자 초기화 및 즉시 노출(스테거)
        initFadeSmart();
        revealOnLoadStagger(app, 90);
    } catch (err) {
        console.error('페이지 로드 실패', err);
        app.innerHTML = '<div class="card"><h3>오류</h3><p>페이지를 불러오지 못했습니다.</p></div>';
    }
}

/* --------------------------
   Navigation init: attach click handlers, manage active
---------------------------*/
function initNavigation() {
    const navButtons = document.querySelectorAll('[data-page]');
    if (!navButtons.length) return;

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const page = btn.getAttribute('data-page');
            // update active
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            loadPage(page);
        });
    });

    // 기본(home) 로드
    const homeBtn = document.querySelector('[data-page="home"]');
    if (homeBtn) {
        homeBtn.classList.add('active');
        loadPage('home');
    }
}

/* --------------------------
   Theme toggle init
   - checkbox exists in index.html (outside #app), so safe
   - when checkbox changes, toggle body.dark and store preference
---------------------------*/
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // restore saved theme
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
        toggle.checked = true;
        // update accessible aria
        const track = toggle.nextElementSibling;
        if (track) track.setAttribute('aria-checked', 'true');
    } else {
        document.body.classList.remove('dark');
        toggle.checked = false;
        const track = toggle.nextElementSibling;
        if (track) track.setAttribute('aria-checked', 'false');
    }

    // avoid double-binding: remove previous listeners by cloning
    const clone = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(clone, toggle);

    clone.addEventListener('change', (e) => {
        const checked = e.target.checked;
        if (checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        const track = e.target.nextElementSibling;
        if (track) track.setAttribute('aria-checked', checked ? 'true' : 'false');
    });
}

/* --------------------------
   DOMContentLoaded: initialize everything
---------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initFadeSmart();
});
