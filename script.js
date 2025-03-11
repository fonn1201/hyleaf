document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.replace(/^\/+|\/+$/g, ''); // Xóa dấu "/" ở đầu & cuối
    if (path === "") path = "home"; // Trang mặc định nếu không có đường dẫn cụ thể

    loadPage(path);
});

// Hàm tải nội dung trang từ thư mục `pages/`
function loadPage(page) {
    fetch(`pages/${page}.html`)
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
}
