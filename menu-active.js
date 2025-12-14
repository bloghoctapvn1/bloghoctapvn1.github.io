function setActiveMenuLink() {
  const links = document.querySelectorAll(".nav ul li a");

  // lấy tên trang hiện tại
  let currentPage = window.location.pathname.replace(/\/$/, "").split("/").pop();
  if (!currentPage) currentPage = "index.html";

  links.forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // bỏ query/hash, lấy tên file cuối
    const clean = href.split("#")[0].split("?")[0];
    const targetPage = clean.replace(/\/$/, "").split("/").pop();

    if (targetPage === currentPage) {
      a.classList.add("active");
    }
  });
}

// để HTML gọi sau khi fetch menu xong
window.setActiveMenuLink = setActiveMenuLink;
