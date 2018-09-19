var gifs = [
  "Patric Stewart",
  "Cat Breading",
  "Ewoks",
  "Bruce Campbell",
  "Rick James",
  "Dave Chappelle",
  "Porkins",
  "Goonies",
  "Wrath of Khan",
  "Mad Max",
  "Mario",
  "Skeletor",
  "Han Shot First",
  "Pugs",
  "South Park"
];
var newButton = [];

$(document).ready(function() {
  start();
});

function start() {
  button = [];
  for (var i = 0; i < gifs.length; i++) {
    var button = gifs[i];
    console.log(button);
    $("#button-display").append(
      "<button class='btn btn-primary'>" + button + "</button>"
    );
  };
  gifApp();
};

function gifApp() {
  $("button").click(function() {
    $("#images").empty();
    var selected = $(this).text();
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      selected +
      "&api_key=5Ctjw2fKwwsi9x1iIjvLF0sQ3SYD2jbY&limit=10";
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      result = response.data;

      for (var i = 0; i < result.length; i++) {
        gif = result[i];
        
        var imageDiv = $("<div>");

        var rating = gif.rating.toUpperCase();

        var title = gif.title.toUpperCase();
        
        var p = $("<p>");
        p.text("Rating: (" + rating + ")");

        var h2 = $("<h2>");

        h2.text("Title: " + title);

        var hr = $("<hr>");

        var gifImage = $("<img>");

        gifImage.addClass("anImg");

        gifImage.attr("src", gif.images.fixed_height_still.url);

        gifImage.attr("data-still", gif.images.fixed_height_still.url);

        gifImage.attr("data-animate", gif.images.fixed_height.url);

        gifImage.attr("data-state", "still");

        imageDiv.append(h2);
        imageDiv.append(gifImage);
        imageDiv.append(p);
        imageDiv.append(hr);
        
        $("#images").append(imageDiv);
      }
      imgLogic();
    });
  });
}

function imgLogic() {
  $(".anImg").click(function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");
    }
  });
}

$("#userSelected").click(function() {
  event.preventDefault();
  newButton = [];
  var text = $("#select")
    .val()
    .trim();
  newButton.push(text);
  $("#button-display").append(
    "<button class='btn btn-primary'>" + newButton + "</button>"
  );
  gifApp();
  $("#select").val("");
});
