const header = document.querySelector('header');
document.addEventListener('scroll', () => {
  header.classList.toggle('header-transparente', window.scrollY > 0);
});
