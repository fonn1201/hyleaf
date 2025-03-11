document.addEventListener("DOMContentLoaded", function () {
    // Thêm Header
    document.getElementById("header").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="/">Hyleaf</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="/">Trang chủ</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/products">Sản phẩm</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/news">Tin tức</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/guide">Hướng dẫn</a></li>
                        <li class="nav-item"><a class="nav-link" href="/pages/contact">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    // Thêm Footer
    document.getElementById("footer").innerHTML = `
        <footer class="footer bg-dark text-white text-center py-3">
            <p>&copy; 2025 Hyleaf. All Rights Reserved.</p>
        </footer>
    `;
});
