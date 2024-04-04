$(document).ready(function() {
    $('#toggle-theme').change(function() {
        if ($(this).prop('checked')) {
            // Ketika dark mode aktif
            $('body, main, footer, nav, .jumbotron, .formulir, .card').addClass('dark-mode');
            $('.form-check-label').text(' Dark');
            $('.form-check-label').prepend('<i class="fa-solid fa-moon"></i>');
            $('.form-check-label').find('.fa-sun').remove();
        } else {
            // Ketika dark mode tidak aktif
            $('body, main, footer, nav, .jumbotron, .formulir, .card').removeClass('dark-mode');
            $('.form-check-label').text(' Light');
            $('.form-check-label').prepend('<i class="fa-solid fa-sun"></i>');
            $('.form-check-label').find('.fa-moon').remove();
        }
    });
});
