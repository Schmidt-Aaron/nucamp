// enables tooltips and carousel buttons
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $("#mycarousel").carousel({ interval: 2000 });
  $("#carousel-button").click(function() {
    if (
      $("#carousel-button")
        .children("span")
        .hasClass("fa-pause")
    ) {
      $("#mycarousel").carousel("pause");
      $("#carousel-button")
        .children("span")
        .removeClass("fa-pause");
      $("#carousel-button")
        .children("span")
        .addClass("fa-play");
    } else if (
      $("#carousel-button")
        .children("span")
        .hasClass("fa-play")
    ) {
      $("#mycarousel").carousel("cycle");
      $("#carousel-button")
        .children("span")
        .removeClass("fa-play");
      $("#carousel-button")
        .children("span")
        .addClass("fa-pause");
    }
  });

  // open login modal when login icon is clicked
  $("#loginButton").on("click", e => {
    $("#loginModal").modal("show");
  });

  // close Login modal
  $(".closeLogin").on("click", e => {
    $("#loginModal").modal("hide");
  });

  // open reservation modal
  $("#reservationButton").on("click", e => {
    $("#reservation-modal").modal("show");
  });

  // close reservation modal
  $(".closeReservation").on("click", e => {
    $("#reservation-modal").modal("hide");
  });
});
