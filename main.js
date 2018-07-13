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

$(window).on('load', function() {
    $(".container #sub-image img").click(function() {
        var image_src = $(this).attr("src");
        
        $(".container #main-image img").attr("src", image_src);
    });
});