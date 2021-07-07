const check = () => {
  let body = document.getElementsByTagName('body')[0];
  setTimeout(function() {
    if (document.getElementById('navbarContent').classList.contains('show')) {
      body.classList.add('modal-open');
    } else {
      body.classList.remove('modal-open');
    }
  }, 500);
};

window.addEventListener(
  'load',
  function() {
    var btn = document.getElementsByClassName('navbar-toggler')[0];
    btn.addEventListener('click', check);
    check();
  },
  false
);

$('.nav-link').on('click', function() {
  if (document.getElementById('navbarContent').classList.contains('show')) {
    $('.navbar-toggler').trigger('click');
  }
});

export default check;
