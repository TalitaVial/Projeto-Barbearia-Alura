const Mobile = document.getElementById('mobile');

function toggleMenu() {
  const nav = document.getElementById('navigation')
  nav.classList.toggle('active')
}

Mobile.addEventListener('click', toggleMenu);