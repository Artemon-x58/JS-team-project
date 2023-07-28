const toTopBtn = document.querySelector('.to-top-button');

window.addEventListener('scroll', event => {
  if (window.pageYOffset > 150) {
    toTopBtn.classList.add('active');
  } else {
    toTopBtn.classList.remove('active');
  }
});
