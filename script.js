document.addEventListener("DOMContentLoaded", function () {
    // Xác định đường dẫn gốc
    const basePath = window.location.pathname.includes("/pages/") ? ".." : ".";

    // Load Header và Footer
    loadComponent("header", `${basePath}/components/header.html`);
    loadComponent("footer", `${basePath}/components/footer.html`);

    // Xử lý nội dung trang
    let path = window.location.pathname.replace(/\/+$/, '') || "/index";
    path = path === "/" ? "index" : path.replace(/^\//, '');

    fetchPageContent(path);

    // Loại bỏ .html khỏi URL hiển thị
    removeHtmlExtension();
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
    let path = window.location.pathname;

    if (path.endsWith(".html")) {
        const newPath = path.replace(".html", "");
        history.replaceState(null, "", newPath);
    }
}
