document.addEventListener("DOMContentLoaded", function () {
    // Thêm Header trực tiếp bằng JavaScript
    document.getElementById("header").innerHTML = `
        <nav class="navbar">
            <div class="container">
                <a class="navbar-brand" href="/">Hyleaf</a>
                <ul class="nav">
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/products">Sản phẩm</a></li>
                    <li><a href="/news">Tin tức</a></li>
                    <li><a href="/guide">Hướng dẫn</a></li>
                    <li><a href="/contact">Liên hệ</a></li>
                </ul>
            </div>
        </nav>
    `;

    // Thêm Footer trực tiếp bằng JavaScript
    document.getElementById("footer").innerHTML = `
        <footer class="footer">
            <p>&copy; 2025 Hyleaf. All Rights Reserved.</p>
        </footer>
    `;

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
