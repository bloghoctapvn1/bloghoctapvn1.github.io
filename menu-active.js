function setActiveMenuLink() {
  const nav = document.getElementById("nav-main");
  if (!nav) return;

  const links = nav.querySelectorAll("a");

  // Lấy đường dẫn trang hiện tại (path) và chuẩn hóa
  let currentPath = window.location.pathname;
  if (currentPath.endsWith("/")) currentPath += "index.html";

  links.forEach(a => {
    a.classList.remove("active");

    const href = a.getAttribute("href");
    if (!href) return;

    // Biến href tương đối -> URL tuyệt đối để so sánh chuẩn
    const targetPath = new URL(href, window.location.href).pathname;

    // So sánh theo path (bỏ qua query/hash)
    if (targetPath === currentPath) {
      a.classList.add("active");
    }
  });
}

// Expose để gọi sau khi fetch menu
window.setActiveMenuLink = setActiveMenuLink;

// Tự chạy lại khi menu vừa được inject vào DOM (chắc chắn không miss)
const observer = new MutationObserver(() => {
  if (document.getElementById("nav-main")) {
    setActiveMenuLink();
    observer.disconnect();
  }
});
observer.observe(document.documentElement, { childList: true, subtree: true });
