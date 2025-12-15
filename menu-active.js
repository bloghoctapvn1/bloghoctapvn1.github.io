<script>
  fetch("menu.html")
    .then(r => r.text())
    .then(html => {
      document.getElementById("menu-container").innerHTML = html;

      // CÁCH 1: gọi trực tiếp (ổn nhất)
      if (window.setActiveMenuLink) window.setActiveMenuLink();

  function toggleMenu() {
    const nav = document.getElementById("nav-main");
    if (!nav) return;
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
  }
</script>
