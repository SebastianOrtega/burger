// Front end JS and jQuery

$(function() {
  // new burger
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerTextInfo")
        .val()
        .trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Created a new burger.");
      location.reload();
    });
  });

  // Devour button
  $(".devourBurgerBtn").on("click", function(event) {
    var id = $(this).data("id");
    var changeBurger = {
      devoured: 0
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: changeBurger
    }).then(function() {
      console.log("Updated burger status.");
      location.reload();
    });
  });
});
