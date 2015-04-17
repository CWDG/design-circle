Template.main.rendered = function() {

    function showDownArrows() {
      $('.down').delay(800).animate({
        opacity: 1
        }, 'slow');
    }

    function hideDownArrows() {
      $('.down').animate({ opacity: 0 }, 'slow');
    }

    $('a[href^=#]').on("click", function() {
        var selector = $(this).attr('href');

        // Get location of selector
        var tOffset = $(selector).position();
        var base = $("#penultimate-container").position().left;

        var sectLeft = (-base) + tOffset.left;
        var sectTop = tOffset.top;

        $('.down').css('opacity', 0); //hide arrows before scrolling
        // Navigate
        $('html, body').animate({
            scrollLeft: sectLeft,
            scrollTop: sectTop
        }, 'slow', 'easeOutCirc', showDownArrows() );

        // Do not do default action
        return false;
    });

    $('.brandImage').parent().on('click', console.log('clicked logo'));

    function parallax(selector, image_src, width) {
        $(selector).before("<div id='parallaxer'></div>")

        $('#parallaxer').css('height', '100vh');
        $('#parallaxer').css('position', 'fixed');
        $('#parallaxer').css('left', 0);
        $('#parallaxer').css('top', 0);
        $('#parallaxer').css('background', 'url(' + image_src + ') no-repeat');
        $('#parallaxer').css('background-size', 'cover');
        $('#parallaxer').css('background-position', 'center');
        $('#parallaxer').css('width', width);
        $('#parallaxer').css('z-index', '-100');

        $('a[href^=#]').on("click", function() {
            var total_distance = $(selector).width() - $(window).width();

            var section = $(this).attr('href');

            // Get location of selector
            var tOffset = $(section).position();
            var base = $("#penultimate-container").position().left;

            var sectLeft = (-base) + tOffset.left;

            var position = sectLeft;


            var fraction = position / total_distance;

            var overlap = $('#parallaxer').width() - $(window).width();
            $('#parallaxer').animate({
              left: -(overlap * fraction)
              }, 'slow', 'easeOutCirc');
        });

        var container_width = $(selector).width();
    }

    parallax('#penultimate-container', '/img/cat2.jpg', 3000);

    $(".down").click(function() {
        console.log("Down!");
        hideDownArrows();
        var new_top = $(this).parents(".section").children(".content-wrapper").position().top;
        $('html,body').animate({
            scrollTop: new_top
        }, 'slow');
    })
}
