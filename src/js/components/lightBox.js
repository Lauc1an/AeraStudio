import 'ekko-lightbox/dist/ekko-lightbox.js';
import 'ekko-lightbox/dist/ekko-lightbox.css';

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
export default () => {};
