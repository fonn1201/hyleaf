document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.replace(/^\/+|\/+$/g, ''); // Xóa dấu "/" ở đầu & cuối
    if (path === "") path = "index"; // Trang mặc định

    // Nếu chạy trên GitHub Pages, cần thêm đường dẫn repo nếu có
    let basePath = "/"; // Nếu có repo, sửa thành "/ten-repo/"

    fetch(basePath + "pages/" + path + ".html")
        .then(response => {
            if (!response.ok) throw new Error("Không tìm thấy trang");
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(() => {
            document.getElementById("content").innerHTML = "<h2>Không tìm thấy trang</h2>";
        });
});
