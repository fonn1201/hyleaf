document.addEventListener("DOMContentLoaded", function () {
    // Load Header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Load Footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    // Load nội dung trang theo URL
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || "index";
    fetch("pages/" + path + ".html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Trang không tồn tại!");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(() => {
            document.getElementById("content").innerHTML = "<h2>Trang không tồn tại</h2>";
        });
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
