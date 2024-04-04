$(document).ready(function() {
    var column1 = document.querySelector('.column1');
var column2 = document.querySelector('.column2');

column1.addEventListener('mouseenter', function() {
    column1.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)';
});
column1.addEventListener('mouseleave', function() {
    column1.style.boxShadow = '';
});

column2.addEventListener('mouseenter', function() {
    column2.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)';
});
column2.addEventListener('mouseleave', function() {
    column2.style.boxShadow = '';
});

})
