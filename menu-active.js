function setActiveMenuLink() {
  const nav = document.getElementById("nav-main");
  if (!nav) return;

  const links = nav.querySelectorAll("a");

  let currentPath = window.location.pathname;
  if (currentPath.endsWith("/")) currentPath += "index.html";

  links.forEach(a => {
    a.classList.remove("active");

    const href = a.getAttribute("href");
    if (!href) return;

    const targetPath = new URL(href, window.location.href).pathname;

    if (targetPath === currentPath) {
      a.classList.add("active");
    }
  });
}

window.setActiveMenuLink = setActiveMenuLink;

// Tự chạy khi menu vừa được fetch chèn vào
new MutationObserver(() => {
  if (document.getElementById("nav-main")) setActiveMenuLink();
}).observe(document.body, { childList: true, subtree: true });
