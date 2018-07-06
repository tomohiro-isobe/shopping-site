$(function() {
    $('.owl-carousel').owlCarousel({
        
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true
    });
    
    $('.sp_menu').click(function() {
        $('.sp_menu_li').slideToggle();
        $('.sp_menu_li').css('background-color', '#f9f8f6');
    });
});