Template.main.rendered = function() {
    $('a[href^=#]').on("click", function() {
        var selector = $(this).attr('href');

        // Debugging
        console.log("Selector: ", selector);

        // TODO:
        // NO LONGER WORKS
        // The location of each selector is relative to the window.

        // Get location of selector
        var tOffset = $(selector).position();
        var sectLeft = tOffset.left;
        var sectTop = tOffset.top;

        // Debugging
        console.log("Left: ", sectLeft, " Top: ", sectTop);

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
