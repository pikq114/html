const sidebar = document.getElementById("sidebar");
const mask = document.getElementById("sidebarMask");
document.getElementById("sidebarToggle").onclick = function () {
  sidebar.classList.toggle("active");
  mask.style.display = sidebar.classList.contains("active") ? "block" : "none";
};
mask.onclick = function () {
  sidebar.classList.remove("active");
  mask.style.display = "none";
};
