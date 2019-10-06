$(document).ready(function () {
  // Array topics
  var topics = [
    "cars",
    "nascar",
    "formula1",
    "supercar"
  ];
  // for loop to appends topics to html
  for (var i = 0; i < topics.length; i++) {
    var button = $("<button>" + topics[i] + "</button>");
    button.appendTo(".buttons");
  }
  //  get gifs by topic
  $("button").on("click", function() {

    var topic = $(this).attr("data-name");
  //  use loop to diplay ten gifs of the topic
  var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=WsZdtxY39VcDAOsbH47aMxYUfXPCISyT&q=" + topic + "&limit=10&offset=0&rating=G&lang=en"
  $.ajax({
    url: queryUrl,
    method: "GET"
  })

    // After the data comes back from the API
    .then(function (response) {
      // Storing an array of results in the results variable
      var results = response.data;
      // Looping over every result item
      for (var i = 0; i < results.length; i++) {

        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating an image tag
          var personImage = $("<img>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(personImage);
          gifDiv.append(p);


          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);
          gifDiv.append(personImage);
          gifDiv.append(p);

        }
      }
    });
      // start and stop animation on click

      // display rating under gif
    });
    });