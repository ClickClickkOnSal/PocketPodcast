$(document).ready(function() {
  
  $(".search-form").on("submit", function(event) {
    event.preventDefault();

    var keyWord = $("#search").val();
    $("#search").val("");

    $.ajax ({
      url: "https://itunes.apple.com/search?parameterkeyvalue&entity=podcast&term=" + keyWord,
      type: "GET",
      dataType: "jsonp",
      success: function(data) { 
        var artistName = data.results[0].artistName;
        var collectionName = data.results[0].collectionName;
        var itunesUrl = data.results[0].collectionViewUrl;
        var imageUrl = data.results[0].artworkUrl600
        var rssUrl = data.results[0].feedUrl;
        var genreType = data.results[0].primaryGenreName;
        
        if(data.resultCount > 1) {
          $("#podcast").html("<p>There are multiple results for your search query<br />Please Select podcast you wish to go to.</p>");
          for(var i = 0; i < data.resultCount; i ++) {
              var options = data.results[i].collectionName;
            $("#option").append("<li><a href='#' id='"+i+"' class='choices'>"+options+"</a></li>");
          };
          $(".choices").on("click", function(event) {
            event.preventDefault();

            var selection = $(this).attr("id");
            $("#podcast").html(data.results[selection].artistName);
            $("#podcast").append(data.results[selection].collectionName);
            $("#podcast").append(data.results[selection].collectionViewUrl);
            $("#podcast").append(data.results[selection].artworkUrl600);
            $("#podcast").append(data.results[selection].primaryGenreName);
          })
        } else {
          $("#podcast").html(artistName);
          $("#podcast").append(collectionName);
          $("#podcast").append(itunesUrl);
          $("#podcast").append(imageUrl);
          $("#podcast").append(genreType);
        }
      },
    });
  });
});



