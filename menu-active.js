(function () {
  function normalizeFile(path) {
    if (!path) return "index.html";

    // bỏ query/hash
    path = path.split("?")[0].split("#")[0].trim();

    // nếu href là dạng folder/ thì coi như index.html
    if (path.endsWith("/")) return "index.html";

    // lấy tên file
    const file = path.split("/").pop();
    return file || "index.html";
  }

  function setActiveMenuLink() {
    const nav = document.getElementById("nav-main");
    if (!nav) return false;

    const links = nav.querySelectorAll("a");
    if (!links.length) return false;

    let currentFile = normalizeFile(window.location.pathname.split("/").pop());
    // trường hợp truy cập dạng /folder/ (không có file)
    if (window.location.pathname.endsWith("/")) currentFile = "index.html";

    links.forEach(a => {
      a.classList.remove("active");

      const href = (a.getAttribute("href") || "").trim();
      if (!href) return;

      const hrefFile = normalizeFile(href);

      if (hrefFile === currentFile) {
        a.classList.add("active");
      }
    });

    return true;
  }

  // expose ra window để bạn vẫn gọi được thủ công nếu muốn
  window.setActiveMenuLink = setActiveMenuLink;

  // 1) chạy khi DOM sẵn sàng
  document.addEventListener("DOMContentLoaded", () => {
    setActiveMenuLink();
  });

  // 2) canh menu.html được fetch chèn vào sau đó -> tự chạy lại
  const observer = new MutationObserver(() => {
    if (setActiveMenuLink()) observer.disconnect();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
