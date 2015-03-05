$(document).ready(function() {
    $(".section").height($(window).height());

    $.scrollify({
        section: ".section"
    });

    $(".brand_image").click(function(){
        $.scrollify("move", 0);
    })

    $("#about-link").click(function() {
        $.scrollify("move", 1)
    });

    $("#events-link").click(function() {
        $.scrollify("move", 3)
    });

    $("#news-link").click(function() {
        $.scrollify("move", 4)
    });

    $("#contact-link").click(function() {
        $.scrollify("move", 5)
    });
});
