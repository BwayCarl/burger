$(document).ready(function() {
    
    $(".devour").on("submit", function(event) {
      event.preventDefault();
  
      var burgerID = $(this).children(".burgerID").val();
      console.log(burgerID); 
      console.log("working");
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burgerID
      }).then((data) => {
              // reload page to display devoured burger in proper column
              location.reload();
          });
  
    });
  });