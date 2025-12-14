(function () {
  function fileOf(path) {
    path = (path || "").split("?")[0].split("#")[0];
    if (path.endsWith("/")) path += "index.html";
    return (path.split("/").pop() || "index.html").trim();
  }

  function setActiveMenuLink() {
    const nav = document.getElementById("nav-main");
    if (!nav) return;

    const currentFile = fileOf(window.location.pathname);

    nav.querySelectorAll("a[href]").forEach(a => {
      a.classList.remove("active");

      const href = (a.getAttribute("href") || "").trim();
      if (!href || href.startsWith("#") || href.startsWith("http")) return;

      const hrefFile = fileOf(href);

      if (hrefFile === currentFile) a.classList.add("active");
    });
  }

  window.setActiveMenuLink = setActiveMenuLink;

  // chạy khi DOM sẵn sàng
  document.addEventListener("DOMContentLoaded", setActiveMenuLink);

  // chạy khi menu được fetch xong
  document.addEventListener("menu:loaded", setActiveMenuLink);
})();
