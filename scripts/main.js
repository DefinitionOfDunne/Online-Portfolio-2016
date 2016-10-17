$(function() {
    $("#project-zero").mouseenter(function(event) {
        $(this).addClass("animated shake");
    });
    $("#project-one").mouseenter(function(event) {
        $(this).addClass("animated shake");
    });
    $("#project-two").mouseenter(function(event) {
        $(this).addClass("animated shake");
    });
    $("#project-three").mouseenter(function(event) {
        $(this).addClass("animated shake");
    });
    $("#project-four").mouseenter(function(event) {
        $(this).addClass("animated shake");
    });
    $(".circle-wrapper").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(event) {
        $(this).removeClass("animated shake");
    });
});


$('#project-zero').popover({
    title: "Project Details",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentFirst").clone();
    }
});

$('#project-one').popover({
    title: "Project Details",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentSecond").clone();
    }
});

$('#project-two').popover({
    title: "Project Details",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentThird").clone();
    }
});

$('#project-three').popover({
    title: "Project Details",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentFourth").clone();
    }
});

$('#project-four').popover({
    title: "Project Details",
    html: true,
    trigger: "hover",
    content: function() {
        return $("#popoverContentFifth").clone();
    }
});



