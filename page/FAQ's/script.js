$(document).ready(function() {
  $('#toggle-theme').change(function() {
      if ($(this).prop('checked')) {
          // Ketika dark mode aktif
          $('body, main, footer, nav, .jumbotron, .formulir, .card, .wrapper').addClass('dark-mode');
          $('.form-check-label').text(' Dark');
          $('.form-check-label').prepend('<i class="fa-solid fa-moon"></i>');
          $('.form-check-label').find('.fa-sun').remove();
      } else {
          // Ketika dark mode tidak aktif
          $('body, main, footer, nav, .jumbotron, .formulir, .card, .wrapper').removeClass('dark-mode');
          $('.form-check-label').text(' Light');
          $('.form-check-label').prepend('<i class="fa-solid fa-sun"></i>');
          $('.form-check-label').find('.fa-moon').remove();
      }
  });

  $('.accordion').click(function() {
      $(this).toggleClass('active');
      var panel = $(this).next();
      if (panel.css('display') === 'block') {
          panel.css('display', 'none');
      } else {
          panel.css('display', 'block');
      }
  });
});
