document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const products = {
        "1": {
            title: "Trà Oolong Thượng Hạng",
            images: ["../src/logo.png", "../src/logo.png", "../src/logo.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: "Giúp thanh lọc cơ thể",
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        }
    };

    if (products[productId]) {
        const product = products[productId];

        // Cập nhật thông tin sản phẩm
        document.getElementById("product-title").textContent = product.title;
        const mainImage = document.getElementById("product-image");
        mainImage.src = product.images[0];

        // Cập nhật công dụng
        const benefitsList = document.getElementById("product-benefits");
        benefitsList.innerHTML = product.benefits.map(benefit => `<li>${benefit}</li>`).join("");

        // Cập nhật lợi ích
        document.getElementById("product-advantage").textContent = product.advantage;

        // Cập nhật liên kết
        document.getElementById("shopee-link").href = product.links.shopee;
        document.getElementById("tiktok-link").href = product.links.tiktok;
        document.getElementById("lazada-link").href = product.links.lazada;

        // Xử lý chuyển đổi hình ảnh
        let currentImageIndex = 0;
        const thumbnailsContainer = document.getElementById("thumbnail-container");

        product.images.forEach((img, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = img;
            imgElement.classList.add("thumbnail");
            imgElement.addEventListener("click", () => {
                currentImageIndex = index;
                mainImage.src = img;
            });
            thumbnailsContainer.appendChild(imgElement);
        });

        document.getElementById("prev-btn").addEventListener("click", () => {
            currentImageIndex = (currentImageIndex === 0) ? product.images.length - 1 : currentImageIndex - 1;
            mainImage.src = product.images[currentImageIndex];
        });

        document.getElementById("next-btn").addEventListener("click", () => {
            currentImageIndex = (currentImageIndex === product.images.length - 1) ? 0 : currentImageIndex + 1;
            mainImage.src = product.images[currentImageIndex];
        });
    } else {
        document.querySelector("main").innerHTML = "<h1 class='text-center'>Sản phẩm không tồn tại</h1>";
    }
});
