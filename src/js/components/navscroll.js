const navscroll = () => {
  var doc = document.documentElement;
  var scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  var nav = document.getElementById('navbar');
  if (scroll >= 150) {
    nav.classList.remove('py-lg-3');
  } else {
    nav.classList.add('py-lg-3');
  }
};
window.addEventListener('scroll', navscroll);

navscroll();
export default navscroll;
