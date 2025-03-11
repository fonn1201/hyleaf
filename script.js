document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.replace(/^\/+|\/+$/g, ''); // Xóa dấu "/" ở đầu & cuối

    // Nếu đường dẫn rỗng, mặc định vào trang chủ
    if (path === "") path = "index";

    // Đảm bảo GitHub Pages có thể tìm đúng file
    fetch("pages/" + path + ".html")
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
