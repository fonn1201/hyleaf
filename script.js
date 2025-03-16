document.addEventListener("DOMContentLoaded", function () {
    // Xác định đường dẫn chính xác của header và footer
    let basePath = window.location.pathname.includes("/pages/") ? ".." : ".";

    // Tải nội dung header và footer
    loadComponent("header", `${basePath}/pages/header.html`);
    loadComponent("footer", `${basePath}/pages/footer.html`);

    // Xử lý URL để bỏ .html
    removeHtmlExtension();
});

// Hàm tải header/footer từ đúng thư mục
function loadComponent(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Không tìm thấy " + url);
            }
            return response.text();
        })
        .then(data => {
            // Giữ nguyên class của phần tử cha (đặc biệt là header)
            const container = document.getElementById(id);
            const temp = document.createElement("div");
            temp.innerHTML = data;

            while (temp.firstChild) {
                container.appendChild(temp.firstChild);
            }
        })
        .catch(error => console.warn(error));
}

// Hàm loại bỏ .html khỏi URL hiển thị
function removeHtmlExtension() {
    let path = window.location.pathname;

    if (path.endsWith(".html")) {
        let newPath = path.replace(".html", "");
        history.replaceState(null, "", newPath);
    }
}
