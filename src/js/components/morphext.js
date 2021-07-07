import 'morphext/dist/morphext.js';
import 'morphext/dist/morphext.css';

$(function() {
  $('#rotating').Morphext({
    animation: 'bounceIn',
    separator: '/',
    speed: 3000,
  });
});
