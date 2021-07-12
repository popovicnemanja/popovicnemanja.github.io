$(document).ready(function() {
    $('[data-btn]').on('click', function () {
        $('[data-content]').toggleClass('move-left');
        $('[data-portfolio]').toggleClass('move-in-bottom');
    });
 });