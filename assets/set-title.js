// Set title tùy theo giá trị được truyền qua `data-title`
document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.body.dataset.title || "Hyleaf";
    document.title = pageTitle;
  });