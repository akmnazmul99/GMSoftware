// slick nav for mobile menu
$(document).ready(function() {
    $('#menu').slicknav();
});


// client slider
$(window).load(function() {
    $("#client_slider").flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 3000,
            pauseOnHover: true
        }
    });
});
