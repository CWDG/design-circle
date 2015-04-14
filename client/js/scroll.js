Template.main.rendered = function() {
    $('a[href^=#]').on("click", function() {
        var selector = $(this).attr('href');

        // Get location of selector
        var tOffset = $(selector).position();
        var base = $("#penultimate-container").position().left;

        var sectLeft = (-base) + tOffset.left;
        var sectTop = tOffset.top;

        // Navigate
        $('html,body').animate({
            scrollLeft: sectLeft,
            scrollTop: sectTop
        },
        'slow');

        // Do not do default action
        return false;
    });
}
