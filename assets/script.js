document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes("/pages/") ? ".." : ".";

    // Load các thành phần chung
    loadComponent("header", `${basePath}/components/header.html`);
    loadComponent("footer", `${basePath}/components/footer.html`);

    // Load head
    fetch(`${basePath}/components/head.html`)
        .then(response => {
            if (!response.ok) throw new Error('Không tìm thấy head.html');
            return response.text();
        })
        .then(data => {
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = data;

            // Lấy tất cả thẻ meta, link, title từ head.html
            const headElements = tempContainer.querySelectorAll('meta, link, title');

            headElements.forEach(el => {
                const existingElement = document.head.querySelector(`${el.tagName.toLowerCase()}[${el.attributes[0]?.name}="${el.attributes[0]?.value}"]`);
                if (!existingElement) {
                    document.head.appendChild(el);
                }
            });

            // Đặt title động từ data-title trong body
            const pageTitle = document.body.dataset.title || "Hyleaf";
            document.title = pageTitle;
        })
        .catch(error => console.error('Error loading head:', error));

    // Loại bỏ .html khỏi URL
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

    if (path.includes(".html")) {
        const newPath = path.replace(/\.html$/, ""); 
        window.history.replaceState(null, "", newPath);
    }
}
