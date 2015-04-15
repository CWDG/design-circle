Template.main.rendered = function() {
    $('a[href^=#]').on("click", function() {
        var selector = $(this).attr('href');

        // Get location of selector
        var tOffset = $(selector).position();
        var base = $("#penultimate-container").position().left;

        var sectLeft = (-base) + tOffset.left;
        var sectTop = tOffset.top;

        // Navigate
        $('html, body').animate({
            scrollLeft: sectLeft,
            scrollTop: sectTop
        },
        'slow', 'easeOutCirc');

        // Do not do default action
        return false;
    });

    function parallax(selector, image_src, width) {
        $(selector).before("<div id='parallaxer'></div>");

        $('#parallaxer').css('height', '100vh');
        $('#parallaxer').css('position', 'fixed');
        $('#parallaxer').css('left', 0);
        $('#parallaxer').css('top', 0);
        $('#parallaxer').css('background', 'url(' + image_src + ') no-repeat');
        $('#parallaxer').css('background-size', 'cover');
        $('#parallaxer').css('background-position', 'center');
        $('#parallaxer').css('width', width);
        $('#parallaxer').css('z-index', '-100');

        $('html, body').scroll(function() {
            var total_distance = $(selector).width() - $(window).width();
            var position = -$(selector).position().left;

            var fraction = position / total_distance;

            var overlap = $('#parallaxer').width() - $(window).width();
            $('#parallaxer').css('left', -(overlap * fraction));
            console.log(fraction);
        })

        var container_width = $(selector).width();
    }

    parallax('#penultimate-container', '/img/cat2.jpg', 3000);
}
