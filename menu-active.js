function setActiveMenuLink() {
  const links = document.querySelectorAll(".nav ul li a");

  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

// chạy khi DOM sẵn sàng (trường hợp menu có sẵn)
document.addEventListener("DOMContentLoaded", setActiveMenuLink);

// cho phép gọi lại sau khi fetch menu.html
window.setActiveMenuLink = setActiveMenuLink;
