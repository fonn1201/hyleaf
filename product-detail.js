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

        // Cập nhật tiêu đề
        document.getElementById("product-title").textContent = product.title;

        // Cập nhật hình ảnh chính
        const mainImage = document.getElementById("product-image");
        mainImage.src = product.images[0];

        // Cập nhật công dụng
        const benefitsList = document.getElementById("product-benefits");
        benefitsList.innerHTML = product.benefits.map(benefit => `<li>${benefit}</li>`).join("");

        // Cập nhật lợi ích
        const advantageList = document.getElementById("product-advantage");
        advantageList.innerHTML = product.advantage.map(adv => `<li>${adv}</li>`).join("");

        // Cập nhật liên kết mua hàng
        document.getElementById("shopee-link").href = product.links.shopee;
        document.getElementById("tiktok-link").href = product.links.tiktok;
        document.getElementById("lazada-link").href = product.links.lazada;

        // Hiển thị các hình ảnh thumbnail
        let currentImageIndex = 0;
        const thumbnailsContainer = document.getElementById("thumbnail-container");

        product.images.forEach((img, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = img;
            imgElement.classList.add("thumbnail");

            // Thêm class 'active' cho hình ảnh đầu tiên
            if (index === 0) {
                imgElement.classList.add("active");
            }

            imgElement.addEventListener("click", () => {
                currentImageIndex = index;
                mainImage.src = img;

                // Xóa class 'active' khỏi tất cả các thumbnail
                document.querySelectorAll(".thumbnail").forEach(thumb => {
                    thumb.classList.remove("active");
                });

                // Thêm class 'active' cho thumbnail đang được chọn
                imgElement.classList.add("active");
            });

            thumbnailsContainer.appendChild(imgElement);
        });

        // Xử lý chuyển đổi hình ảnh
        document.getElementById("prev-btn").addEventListener("click", () => {
            currentImageIndex = (currentImageIndex === 0) ? product.images.length - 1 : currentImageIndex - 1;
            mainImage.src = product.images[currentImageIndex];
        });

        document.getElementById("next-btn").addEventListener("click", () => {
            currentImageIndex = (currentImageIndex === product.images.length - 1) ? 0 : currentImageIndex + 1;
            mainImage.src = product.images[currentImageIndex];
        });

        // Toggle collapse/extend cho Công dụng
        document.getElementById("toggle-benefits").addEventListener("click", function () {
            benefitsList.classList.toggle("show");
            this.textContent = benefitsList.classList.contains("show") ? "▼ Thu gọn" : "▶ Xem thêm";
        });

        // Toggle collapse/extend cho Lợi ích
        document.getElementById("toggle-advantage").addEventListener("click", function () {
            advantageList.classList.toggle("show");
            this.textContent = advantageList.classList.contains("show") ? "▼ Thu gọn" : "▶ Xem thêm";
        });
    } else {
        document.querySelector("main").innerHTML = "<h1 class='text-center'>Sản phẩm không tồn tại</h1>";
    }
})