$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 1000 });
    // $('#carousel-pause').click(function () {
    //     $('#mycarousel').carousel('pause');
    // });
    // $('#carousel-play').click(function () {
    //     $('#mycarousel').carousel('cycle');
    // });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    $("#access-reserve-modal").click(function () {
        $('#reserveModal').modal('show');
    });
    $("#access-login-modal").click(function () {
        $('#loginModal').modal('show');
    });
    $("#cancel-reserve").click(function () {
        $('#reserveModal').modal('hide');
    });
    $("#cancel-login").click(function () {
        $('#loginModal').modal('hide');
    });
    $("#cancel-reserve-2").click(function () {
        $('#reserveModal').modal('hide');
    });
    $("#cancel-login-2").click(function () {
        $('#loginModal').modal('hide');
    });
})