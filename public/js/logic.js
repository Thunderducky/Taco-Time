$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTaco = {
        quote: $("#tacotext").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
    }).then(
        function () {
            console.log("created new taco");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
