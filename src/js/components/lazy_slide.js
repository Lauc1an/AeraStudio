const lazy_slide = () => {
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - $('#navbar').height(),
          },
          1000
        );
        return false;
      }
    }
  });
};
lazy_slide();
export default lazy_slide;
