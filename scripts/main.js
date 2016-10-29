$(function() {
    $(".project-img").mouseenter(function(event) {
        $(this).addClass("animated pulse");
    });
    $(".project-img").mouseleave(function(event) {
        $(this).removeClass("animated pulse");
    });
});
