document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.replace(/^\/+|\/+$/g, ''); // Xóa dấu "/" ở đầu & cuối

    if (path === "" || path === "index") {
        path = "index.html";
    } else {
        path = "pages/" + path + ".html"; // Thêm pages/ và .html
    }

    fetch(path)
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
