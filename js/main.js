const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('offcanvas-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded',!expanded);
  menu.classList.toggle('expanded');
});

document.addEventListener("click", function (event) {
  let checkbox = document.getElementById("menu-toggle");
  let menu = document.querySelector(".menu-items");
  
  if (!menu.contains(event.target) && !checkbox.contains(event.target)) {
      checkbox.checked = false;
  }
});