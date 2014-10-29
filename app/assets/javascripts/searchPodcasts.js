$(document).ready(function() {
  
  $(".search-form").on("submit", function(event) {
    event.preventDefault();

    $(".add-to-playlist").hide();
    $("h4 a").hide();
    $(".notice").html("");
    $(".container").html("");

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
        if(data.results.length > 0) {
          for(var i = 0; i < data.resultCount; i ++) {
                var options = dataResult[i].collectionName;
                var photo = dataResult[i].artworkUrl600;
              optionSelection.append("<li><a href='#' id='"+i+"' class='choices'>"+options+"</a><br /><img src='"+photo+"'></li>");
          };

          $(".choices").on("click", function(event) {
              event.preventDefault();

              optionSelection.html("");
               $(".button-add").show();
              var selection = $(this).attr("id");

              podCast.html("<li><img src='"+dataResult[selection].artworkUrl600+"' class='image-url'></li>");
              podCast.append("<li>Artist Name: <span class='artist'>"+dataResult[selection].artistName+"</span></li>");
              podCast.append("<li>Podcast Name: <span class='collection'>"+dataResult[selection].collectionName+"</span></li>");
              podCast.append("<li><a href='"+dataResult[selection].collectionViewUrl+"' class='itunes-url'>Click Here to view Podcast on the Itunes Website.</a></li>");
              podCast.append("<li class='rss-url'>"+dataResult[selection].feedUrl+"</li>");
              podCast.append("<li>Primary Genre: <span class='primary-genre'>"+dataResult[selection].primaryGenreName+"</span></li>");
              $(".add-to-playlist").show();
          });
        } else {
            optionSelection.html("No results found from search.");
            podCast.html("");
        };
      },
      failure: function(data) {
        optionSelection.html("Error. Could not retrieve Info from search result.");
        podCast.html("");
      }
    });
  });
});



