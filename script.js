function loadPage(file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error(`Cannot load ${file}`);
      return response.text();
    })
    .then((data) => {
      const container = document.getElementById("content");
      container.innerHTML = data;

      container.querySelectorAll("script").forEach((oldScript) => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
        document.body.removeChild(newScript);
      });
    })
    .catch((error) => {
      document.getElementById(
        "content"
      ).innerHTML = `<div class="alert alert-danger" role="alert">
                            <strong>Error:</strong> ${error.message}
                        </div>`;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById("navbarClose");
  const navbarCollapse = document.getElementById("navbarNav");

  closeButton.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
  });

  document.querySelectorAll("[data-file]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const file = link.getAttribute("data-file");
      if (file) {
        loadPage(file);

        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  if (typeof bootstrap === "undefined") {
    const toggler = document.querySelector(".navbar-toggler");

    if (toggler && navbarCollapse) {
      toggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
      });
    }
  }
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      if (!this.classList.contains("dropdown-toggle")) {
        document.querySelectorAll(".navbar-nav .nav-link").forEach((nav) => {
          nav.classList.remove("active");
        });
        this.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelectorAll(".navbar-nav .nav-link").forEach((nav) => {
        nav.classList.remove("active");
      });
      const parentDropdown =
        this.closest(".dropdown").querySelector(".dropdown-toggle");
      if (parentDropdown) {
        parentDropdown.classList.add("active");
      }
    });
  });
  
  loadPage("dashboard.html");
});
