document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const products = {
        "1": {
            title: "Trà Oolong Tứ Quý",
            images: ["/src/oolongtuquy.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa", "Tỉnh táo"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/6pmcEffmq2",
                tiktok: "https://shop.tiktok.com/view/product/1731618971777599946?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osqq"
            }
        },
        "2": {
            title: "Trà Oolong Thiết Quan Âm",
            images: ["/src/oolongthietquanam.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/6V9lq5XNZY",
                tiktok: "https://shop.tiktok.com/view/product/1731618962230839754?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osqt"
            }
        },
        "3": {
            title: "Trà Oolong Kim Tuyên",
            images: ["/src/oolongkimtuyen.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/7KispdCTku",
                tiktok: "https://shop.tiktok.com/view/product/1731618981069425098?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osqw"
            }
        },
        "4": {
            title: "Trà Oolong Hương Lài (Nhài)",
            images: ["/src/oolonghuonglai.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/30ZtfgstwB",
                tiktok: "https://shop.tiktok.com/view/product/1731618963919440330?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osqA"
            }
        },
        "5": {
            title: "Trà Oolong Nguyên Lá",
            images: ["/src/oolongnguyenla.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/BFiIUq5IJ",
                tiktok: "https://shop.tiktok.com/view/product/1731618957425674698?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osJc"
            }
        },
        "6": {
            title: "Trà Oolong Nguyên Vị",
            images: ["/src/oolongnguyenvi.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/5KxoS0AMAE",
                tiktok: "https://shop.tiktok.com/view/product/1731618970285869514?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osJW"
            }
        },
        "7": {
            title: "Trà Xanh Lài Đặc Biệt",
            images: ["/src/xanhlaidacbiet.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/5faeqcrUsy",
                tiktok: "https://shop.tiktok.com/view/product/1731618971880622538?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osJg"
            }
        },
        "8": {
            title: "Trà Đen B'Lao",
            images: ["/src/denblao.png", "/src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "https://s.shopee.vn/6fTC2ThiZU",
                tiktok: "https://shop.tiktok.com/view/product/1731618968313956810?region=VN&locale=vi-VN",
                lazada: "https://s.lazada.vn/s.5osJ7"
            }
        }
    };

    if (products[productId]) {
        const product = products[productId];
        const mainImage = document.getElementById("product-image");
        const benefitsList = document.getElementById("product-benefits");
        const advantageList = document.getElementById("product-advantage");
        const thumbnailsContainer = document.getElementById("thumbnail-container");

        // Cập nhật thông tin sản phẩm
        document.getElementById("product-title").textContent = product.title;
        mainImage.src = product.images[0];
        benefitsList.innerHTML = product.benefits.map(benefit => `<li>${benefit}</li>`).join("");
        advantageList.innerHTML = product.advantage.map(adv => `<li>${adv}</li>`).join("");
        document.getElementById("shopee-link").href = product.links.shopee;
        document.getElementById("tiktok-link").href = product.links.tiktok;
        document.getElementById("lazada-link").href = product.links.lazada;

        let currentImageIndex = 0;

        // Hiển thị thumbnail và thêm class 'active' cho hình đầu tiên
        product.images.forEach((img, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = img;
            imgElement.classList.add("thumbnail");
            if (index === 0) imgElement.classList.add("active");
            imgElement.addEventListener("click", () => {
                updateActiveThumbnail(index);
                currentImageIndex = index;
                mainImage.src = img;
            });
            thumbnailsContainer.appendChild(imgElement);
        });

        // Xử lý nút chuyển ảnh
        document.getElementById("prev-btn").addEventListener("click", () => {
            currentImageIndex = (currentImageIndex === 0) ? product.images.length - 1 : currentImageIndex - 1;
            updateMainImage();
        });

        document.getElementById("next-btn").addEventListener("click", () => {
            currentImageIndex = (currentImageIndex === product.images.length - 1) ? 0 : currentImageIndex + 1;
            updateMainImage();
        });

        // Hàm cập nhật hình ảnh chính và thumbnail active
        function updateMainImage() {
            mainImage.src = product.images[currentImageIndex];
            updateActiveThumbnail(currentImageIndex);
        }

        // Hàm cập nhật class 'active' cho thumbnail đang hoạt động
        function updateActiveThumbnail(index) {
            const thumbnails = document.querySelectorAll(".thumbnail");
            thumbnails.forEach(thumb => thumb.classList.remove("active"));
            thumbnails[index].classList.add("active");
        }

        // Toggle collapse cho Công dụng
        document.getElementById("toggle-benefits").addEventListener("click", function () {
            benefitsList.classList.toggle("show");
            this.textContent = benefitsList.classList.contains("show") ? "▼" : "▶";
        });

        // Toggle collapse cho Lợi ích
        document.getElementById("toggle-advantage").addEventListener("click", function () {
            advantageList.classList.toggle("show");
            this.textContent = advantageList.classList.contains("show") ? "▼" : "▶";
        });

    } else {
        document.querySelector("main").innerHTML = "<h1 class='text-center'>Sản phẩm không tồn tại</h1>";
    }
});