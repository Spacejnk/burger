// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".order-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newburger");
  
      var newBurgerState = {
        testburger: newBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/bigburger" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed burger to", newBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newItem = {
        name: $("#ca").val().trim(),
        testburger: $("[name=testburger]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/bigburger", {
        type: "POST",
        data: newItem
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/bigburger" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  