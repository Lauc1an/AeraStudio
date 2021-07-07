import 'jquery-validation/dist/jquery.validate.js';
import './input_events.js';
import './jquery_validator_es.js';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});

$('#send_email').on('click', function(evt) {
  evt.preventDefault();
  var btn = $(this);
  var form = $("form[name='contact']");
  form.validate();
  if (form.valid()) {
    btn.prop('disabled', true);
    $.ajax({
      url: window.location.origin + '/contactmail.php',
      method: 'POST',
      dataType: 'json',
      data: form.serialize(),
    }).then(
      function(data) {
        btn.prop('disabled', false);
        console.log(data);
        if (data.result) {
          form.trigger('reset');
          form.find('textarea').removeClass('valid');
          Toast.fire({
            type: 'success',
            title: 'El mensaje ha sido enviado.',
          });
          form.find('.isDirty').removeClass('dirty');
        }
      },
      function(error) {
        btn.prop('disabled', false);
        console.log('error', error);
        Toast.fire({
          type: 'error',
          title: 'No se pudo enviar el mensaje.',
        });
      }
    );
  }
});

export default () => {};
