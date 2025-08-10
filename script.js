
function loadPage(file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Cannot load ${file}`);
      return response.text();
    })
    .then(data => {
      const container = document.getElementById("content");
      container.innerHTML = data;

      container.querySelectorAll("script").forEach(oldScript => {
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
    .catch(error => {
      document.getElementById("content").innerHTML =
        `<p class="text-danger">${error}</p>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage("dashboard.html");

  document.querySelectorAll("[data-file]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const file = link.getAttribute("data-file");
      if (file) {
        loadPage(file);
      }
    });
  });
});


 document.querySelector('.navbar-toggler').addEventListener('click', function () {
        document.getElementById('navbarNav').classList.toggle('show');
    });
   
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });