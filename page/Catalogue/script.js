$(document).ready(function() {
// Get the button element
const button = document.getElementById('hidden');

// Add a click event listener
$(button).on('click', function() {
    // Apply fade-out effect
    $(this).fadeOut(500, function() {
        // Hide the button after the fade-out effect
        $(this).hide();
    });
});
})