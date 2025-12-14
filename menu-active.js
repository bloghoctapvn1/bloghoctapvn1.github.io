document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav ul li a");

  // Lấy tên file hiện tại (không kèm query ? hoặc #)
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html";

  links.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });
});
