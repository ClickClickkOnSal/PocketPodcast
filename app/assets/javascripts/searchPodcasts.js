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
        var artist = data.results[0].artistName;
        var collection = data.results[0].collectionName;
        var collectionItunesUrl = data.results[0].collectionViewUrl;
        var imageUrl = data.results[0].artworkUrl600
        var rssUrl = data.results[0].feedUrl;
        var genreTypes = data.results[0].genres;
        $("#podcast").html(artist);
        $("#podcast").append(collection);
        $("#podcast").append(collectionItunesUrl);
        $("#podcast").append(imageUrl);
        $("#podcast").append(genreTypes);
      },
    });
  });
});



