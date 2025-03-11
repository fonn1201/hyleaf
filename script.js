document.addEventListener("DOMContentLoaded", function () {
    // Load header và footer
    loadComponent("header", "pages/header.html");
    loadComponent("footer", "pages/footer.html");
});

function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error loading " + url, error));
}
