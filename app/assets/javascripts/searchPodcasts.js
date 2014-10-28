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

        var optionSelection = $(".option")
        var dataResult = data.results;
        var podCast = $(".podcast");

        podCast.html("");
        optionSelection.html("");

        for(var i = 0; i < data.resultCount; i ++) {
              var options = dataResult[i].collectionName;
              var photo = dataResult[i].artworkUrl600;
            optionSelection.append("<li><a href='#' id='"+i+"' class='choices'>"+options+"</a><br /><img src='"+photo+"'></li>");
        };

        $(".choices").on("click", function(event) {
            event.preventDefault();

            optionSelection.html("");
            var selection = $(this).attr("id");

            podCast.html("<li>Artist Name: "+dataResult[selection].artistName+"</li>");
            podCast.append("<li>Podcast Name: "+dataResult[selection].collectionName+"</li>");
            podCast.append("<li><a href='"+dataResult[selection].collectionViewUrl+"'>Click Here to view Podcast on the Itunes Website.</a></li>");
            podCast.append("<li><img src='"+dataResult[selection].artworkUrl600+"'></li>");
            podCast.append("<li class='rss'>"+dataResult[selection].feedUrl+"</li>");
            podCast.append("<li>Primary Genre: "+dataResult[selection].primaryGenreName+"</li>");
            podCast.append("<li><button class='add-to-playlist'>Add to Playlist</button></li>");
        });
      },
    });
  });
});



