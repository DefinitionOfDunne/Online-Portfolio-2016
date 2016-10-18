$(function() {
    $(".content-circle").mouseenter(function(event) {
        $(this).addClass("animated shake");
    });
    $(".circle-wrapper").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
        $(this).removeClass("animated shake");
    });
});

$('#project-zero').popover({
    title: "From 1990 - 2015:",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentFirst").clone();
    }
});

$('#project-one').popover({
    title: "Romance With Russ Comment Generator",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentSecond").clone();
    }
});

$('#project-two').popover({
    title: "PodFan: A Resource For Pod Lovers",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentThird").clone();
    }
});

$('#project-three').popover({
    title: "Official Evan Lian Fan Page",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentFourth").clone();
    }
});

$('#project-four').popover({
    title: "Universally Rendered Blogging Application",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentFifth").clone();
    }
});



