// $(function(){
//     $('.hamb').click(function(){
//         $('.header-menu').animate({
//         right: 0
//         });
//     $(this).hide();
//     $('.overlay').fadeIn();
//     });
//     $('.header-menu span, .overlay').click(function(){
//         $('.header-menu').animate({
//         top: -250
//     });
//     $('.hamb').show();
//     $('.overlay').fadeOut();
//     });
// });

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});