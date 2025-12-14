function setActiveMenuLink() {
  const links = document.querySelectorAll("#nav-main a");

  // Lấy tên file hiện tại (index.html, cach-on-thi.html...)
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage) currentPage = "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Chỉ lấy tên file của link
    const linkPage = href.split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

// Cho HTML gọi sau khi fetch menu
window.setActiveMenuLink = setActiveMenuLink;
