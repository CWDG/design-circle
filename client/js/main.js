$(document).ready(function() {
    $.scrollify({
        section: ".section"
    });

    $("#about-link").click(function() {
        $.scrollify("move", 1)
    });

    $("#events-link").click(function() {
        $.scrollify("move", 2)
    });

    $("#news-link").click(function() {
        $.scrollify("move", 4)
    });

    $("#contact-link").click(function() {
        $.scrollify("move", 5)
    });
});
