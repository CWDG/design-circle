Template.main.rendered = function() {
    $(".section").height($(window).height());

    $.scrollify({
        section: ".section"
    });
};
