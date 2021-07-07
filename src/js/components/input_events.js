$(function() {
  $('.number').on('keypress', function(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  });

  $('.currency').on('keypress', function(event) {
    if (
      event.which !== 127 &&
      event.which !== 8 &&
      (event.which !== 46 ||
        $(this)
          .val()
          .indexOf('.') !== -1) &&
      (event.which < 48 || event.which > 57)
    ) {
      if (
        event.which !== 46 ||
        $(this)
          .val()
          .indexOf('.') !== -1
      ) {
        event.preventDefault();
      }
      event.preventDefault();
    }
    if (
      this.value.indexOf('.') > -1 &&
      this.value.split('.')[1].length > 1 &&
      event.which !== 127 &&
      event.which !== 8
    ) {
      event.preventDefault();
    }
  });

  $('.only-text').on('keypress', function(evt) {
    evt = evt ? evt : window.event;
    if (evt.key && evt.key !== ' ' && !evt.key.match(/^[A-Za-z]+$/g)) {
      event.preventDefault();
    }
  });

  $('.isDirty').on('input keypress focusout focusin change', function() {
    if (this.value.trim().replace(/\s/g, '') != '') {
      this.classList.add('dirty');
    } else {
      this.classList.remove('dirty');
    }
  });
});
