$(document).ready(function() {
    $('a[href^=#]').on("click", function() {
        alert("Hello!");

        var tOffset = t.offset().top;
        $('html,body').animate({
            scrollTop: tOffset-20
        },
        'slow');
        return false;
    });
});
