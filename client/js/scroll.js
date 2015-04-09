Template.main.rendered = function() {
    $('a[href^=#]').on("click", function() {
        var selector = $(this).attr('href');
        var tOffset = $(selector).offset().top;
        console.log(tOffset);
        $('html,body').animate({
            scrollTop: tOffset
        },
        'slow');
        return false;
    });
}
