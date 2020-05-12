$(document).ready(function () {

    var gitIcon = $("#gitIcon");
    var linkedIcon = $("#linkedIcon");
    var emailIcon = $("#emailIcon");

    gitIcon.mouseenter(function () {
        gitIcon.attr("src", "assets/images/gitgreen.png");
    });
    gitIcon.mouseleave(function () {
        gitIcon.attr("src", "assets/images/gitgrey.png");
    });

    linkedIcon.mouseenter(function () {
        linkedIcon.attr("src", "assets/images/linkgreen.png");
    });
    linkedIcon.mouseleave(function () {
        linkedIcon.attr("src", "assets/images/linkgrey.png");
    });

    emailIcon.mouseenter(function () {
        emailIcon.attr("src", "assets/images/emailgreen.png");
    });
    emailIcon.mouseleave(function () {
        emailIcon.attr("src", "assets/images/emailgrey.png");
    });


});
