document.addEventListener("DOMContentLoaded", function () {
    // Tải header và footer
    loadComponent("header", "/pages/header");
    loadComponent("footer", "/pages/footer");

    // Xử lý chuyển hướng để bỏ đuôi .html
    handleURLRewrite();
});

// Hàm tải header/footer mà không gây lỗi
function loadComponent(id, url) {
    fetch(url + ".html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Không tìm thấy " + url);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.warn(error));
}

// Hàm loại bỏ .html khỏi URL
function handleURLRewrite() {
    let path = window.location.pathname;

    // Nếu truy cập trang có đuôi .html, chuyển hướng sang URL không có .html
    if (path.endsWith(".html")) {
        let newPath = path.replace(".html", "");
        history.replaceState(null, "", newPath);
    }
}
