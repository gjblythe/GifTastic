var gifs = ["Patric Stewart", "Cats", "Ewoks", "Bruce Campbell", "Rick James"];


$(document).ready(function() {
  console.log("ready!");
  startButtons();
});




function startButtons() {
    
    for (var i = 0; i < gifs.length; i++) {
        var button = gifs[i];
        console.log(button);
        $("#button-display").append("<button class='btn btn-primary'>" + button + "</button>");
    }
    $("button").click(function() {
        $("#images").empty();
        var selected = $(this).text();
        var queryURL =
        "https://api.giphy.com/v1/gifs/search?q=" +
        selected +
        "&api_key=5Ctjw2fKwwsi9x1iIjvLF0sQ3SYD2jbY&limit=10";
        console.log(selected);
        
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response.data);
            result = response.data;
            for (var i = 0; i < result.length; i++){
                gif =  result[i];
                var imageDiv = $("<div>");
                
                var p = $("<p>");
                p.text("Rating: " + gif.rating);
                
                
                var gifImage = $("<img id='still'>");
                
                //need help
                gifImage.attr("src", gif.images.fixed_height_still.url);
                var still = $(this).attr("src", $(this)); 
                
                
                //need help
                var animateGif = $("<img>");
                animateGif.attr("src", gif.images.fixed_height.url);
                
                
                
                imageDiv.append(gifImage);
                imageDiv.append(p);
                $("#images").append(imageDiv);
                
                
                $('img').click(function(){
                    if ($(this) === $('#still')) {
                        $(this).attr(animate);
                        
                    } else {
                        $(this).attr(still);
                    }
                })  
            };
            
        });
        
        
        
        
    });
};


