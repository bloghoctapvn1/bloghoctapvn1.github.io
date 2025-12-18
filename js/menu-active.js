
//js/menu-active.js
(function () {
  function cleanPath(p) {
    return (p || "").split("?")[0].split("#")[0];
  }

  function fileOf(path) {
    path = cleanPath(path);

    // nếu là thư mục: /Kinhnghiemhoctap/ -> index.html
    if (!path || path.endsWith("/")) return "index.html";

    return (path.split("/").pop() || "index.html").trim();
  }

  function setActiveMenuLink() {
    const nav = document.getElementById("nav-main");
    if (!nav) return;

    const currentFile = fileOf(window.location.pathname);

    nav.querySelectorAll("a[href]").forEach(a => {
      a.classList.remove("active");

      const href = (a.getAttribute("href") || "").trim();
      if (!href) return;

      // bỏ qua link ngoài + anchor
      if (href.startsWith("#") || href.startsWith("http")) return;

      const hrefFile = fileOf(href);

      if (hrefFile === currentFile) {
        a.classList.add("active");
      }
    });
  }

  // expose để gọi sau fetch menu.html
  window.setActiveMenuLink = setActiveMenuLink;

  // chạy khi trang load xong
  document.addEventListener("DOMContentLoaded", () => {
    // nếu menu đã có sẵn thì set luôn
    setActiveMenuLink();

    // nếu menu được fetch sau đó => nghe event
    document.addEventListener("menu:loaded", setActiveMenuLink);
  });
})();

