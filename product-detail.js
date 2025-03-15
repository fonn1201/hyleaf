document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const products = {
        "1": {
            title: "Trà Oolong Tứ Quý",
            images: ["../src/oolongtuquy.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa","Tỉnh táo"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        },
        "2": {
            title: "Trà Oolong Thiết Quan Âm",
            images: ["../src/oolongthietquanam.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        },
        "3": {
            title: "Trà Oolong Kim Tuyên",
            images: ["../src/oolongkimtuyen.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        },
        "4": {
            title: "Trà Oolong Hương Lài (Nhài)",
            images: ["../src/oolonghuonglai.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        },
        "5": {
            title: "Trà Oolong Nguyên Lá",
            images: ["../src/oolongnguyenla.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        },
        "6": {
            title: "Trà Oolong Nguyên Vị",
            images: ["../src/oolongnguyenvi.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        },
        "7": {
            title: "Trà Xanh Lài Đặc Biệt",
            images: ["../src/xanhlaidacbiet.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        },
        "8": {
            title: "Trà Đen B'Lao",
            images: ["../src/denblao.png", "../src/giaychungnhanVSATTP.png"],
            benefits: ["Thư giãn tinh thần", "Hỗ trợ tiêu hóa"],
            advantage: ["Thư giãn tinh thần", "Thanh lọc cơ thể"],
            links: {
                shopee: "#",
                tiktok: "#",
                lazada: "#"
            }
        }
    };

    if (products[productId]) {
        const product = products[productId];

        // Cập nhật tiêu đề
        document.getElementById("product-title").textContent = product.title;

        // Cập nhật công dụng (dữ liệu động)
        const benefitsList = document.getElementById("product-benefits");
        benefitsList.innerHTML = product.benefits.map(benefit => `<li>${benefit}</li>`).join("");

        // Cập nhật lợi ích
        document.getElementById("product-advantage").textContent = product.advantage;

        // Cập nhật link mua hàng
        document.getElementById("shopee-link").href = product.links.shopee;
        document.getElementById("tiktok-link").href = product.links.tiktok;
        document.getElementById("lazada-link").href = product.links.lazada;

        // Xử lý toggle collapse
        document.getElementById("toggle-benefits").addEventListener("click", function() {
            benefitsList.classList.toggle("show");
            this.textContent = benefitsList.classList.contains("show") ? "▼" : "▶";
        });

        document.getElementById("toggle-advantage").addEventListener("click", function() {
            const advantage = document.getElementById("product-advantage");
            advantage.classList.toggle("show");
            this.textContent = advantage.classList.contains("show") ? "▼" : "▶";
        });
    } else {
        document.querySelector("main").innerHTML = "<h1 class='text-center'>Sản phẩm không tồn tại</h1>";
    }
});

// Xử lý nút toggle Công dụng
document.getElementById("toggle-benefits").addEventListener("click", function () {
    const benefitsList = document.getElementById("product-benefits");
    benefitsList.classList.toggle("show");
    this.textContent = benefitsList.classList.contains("show") ? "▼" : "▶";
});

// Xử lý nút toggle Lợi ích
document.getElementById("toggle-advantage").addEventListener("click", function () {
    const advantage = document.getElementById("product-advantage");
    advantage.classList.toggle("show");
    this.textContent = advantage.classList.contains("show") ? "▼" : "▶";
});
