function setActiveMenuLink() {
  const nav = document.getElementById("nav-main");
  if (!nav) return;

  const links = nav.querySelectorAll("a");

  // Lấy tên file hiện tại
  let currentFile = window.location.pathname.split("/").pop();
  if (!currentFile) currentFile = "index.html";

  links.forEach(a => {
    a.classList.remove("active");

    const href = (a.getAttribute("href") || "").trim();
    if (!href) return;

    // So sánh theo tên file (cách an toàn nhất cho GitHub Pages + thư mục con)
    const hrefFile = href.split("/").pop();

    if (hrefFile === currentFile) {
      a.classList.add("active");
    }
  });
}

window.setActiveMenuLink = setActiveMenuLink;
