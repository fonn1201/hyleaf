document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes("/pages/") ? ".." : ".";

    // Load header và footer
    loadComponent("header", `${basePath}/components/header.html`);
    loadComponent("footer", `${basePath}/components/footer.html`);
});

// Hàm tải header và footer
function loadComponent(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Không tìm thấy ${url}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Hàm load nội dung trang
function fetchPageContent(page) {
    const url = `pages/${page}.html`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Trang không tồn tại!");
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(() => {
            document.getElementById("content").innerHTML = "<h2>Trang không tồn tại</h2>";
        });
}

// Hàm loại bỏ .html khỏi URL hiển thị
function removeHtmlExtension() {
    const url = window.location.pathname;
    if (url.endsWith(".html")) {
        const newUrl = url.replace(".html", "");
        window.history.replaceState({}, document.title, newUrl);
    }
}
