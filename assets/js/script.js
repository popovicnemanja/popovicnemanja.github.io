$(document).ready(function() {
    $('[data-btn]').on('click', function () {
        $('[data-content]').toggleClass('move-left');
        $('[data-portfolio]').toggleClass('move-in-bottom');
    });
 });

 let button = document.getElementById('btn')
 function change() {
     if(button.innerHTML === 'my projects') {
         button.innerHTML = 'back to home';
     } else {
         button.innerHTML = 'my projects'
     }
 }  