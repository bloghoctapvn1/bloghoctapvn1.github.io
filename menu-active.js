function setActiveMenuLink() {
  const links = document.querySelectorAll("#nav-main a");

  // Lấy tên file hiện tại (index.html, meo-hoc-nhanh.html, cach-on-thi.html…)
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage) currentPage = "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Lấy tên file của link
    const linkPage = href.split("/").pop();

    // Reset trước (tránh bị active 2 cái)
    link.classList.remove("active");

    // Match chính xác
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

// Cho HTML gọi sau khi fetch menu.html
window.setActiveMenuLink = setActiveMenuLink;
