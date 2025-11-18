// app.js

// 페이지 로더
async function loadPage(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById("app").innerHTML = html;

        // 페이지 로드 후 애니메이션 스크립트 다시 실행
        initFadeSmart();
    } catch (err) {
        console.error("페이지 로드 오류:", err);
        document.getElementById("app").innerHTML =
            "<p style='color:red'>페이지를 불러오지 못했습니다.</p>";
    }
}

// 첫 페이지 자동 로드
window.addEventListener("DOMContentLoaded", () => {
    loadPage("portfolio.html");
});
