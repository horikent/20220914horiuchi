const target = document.getElementById("hamburger-menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("hamburger-nav");
  nav.classList.toggle('in');
});