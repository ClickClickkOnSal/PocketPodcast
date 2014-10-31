$(document).ready(function() {
  
  $(".search-form").on("submit", function(event) {
    event.preventDefault();

    $(".add-to-playlist").hide();
    // hides delete play button
    $("h4 a").hide();
    // hides notice message is commented out right now
    $(".notice").html("");
    // commented out still
    $(".container").hide();
    // show the list here because it will be hidden if a choice is clicked
    $(".search-pc-container").hide();
    $(".add-to-your-pl").hide();
    $(".search-js").show();
    $(".independent-button").html("");

    var keyWord = $("#search").val();
    $("#search").val("");

    // API call
    $.ajax ({
      url: "https://itunes.apple.com/search?parameterkeyvalue&entity=podcast&term=" + keyWord,
      type: "GET",
      dataType: "jsonp",
      success: function(data) { 
        var optionSelection = $(".option");
        var dataResult = data.results;
        var podCast = $(".podcast-show");

        podCast.html("");
        optionSelection.html("");
        if(data.results.length > 0) {
          for(var i = 0; i < data.resultCount; i ++) {
                var options = dataResult[i].collectionName;
                var photo = dataResult[i].artworkUrl600;
              optionSelection.append("<li><a href='#' id='"+i+"' class='choices'>"+options+"</a><br /><a href='#' class='choices' id='"+options+"'><img src='"+photo+"' class='image-list'></a></li>");
          };

          $(".choices").on("click", function(event) {
              event.preventDefault();

              $(".search-js").hide();
              $(".add-to-your-pl").show();
              $(".search-pc-container").show();

              var selection = $(this).attr("id");

              podCast.html("<li><img src='"+dataResult[selection].artworkUrl600+"' class='image-list'></li>");
              podCast.append("<li>Artist Name: <span class='artist'>"+dataResult[selection].artistName+"</span></li>");
              podCast.append("<li>Podcast Name: <span class='collection'>"+dataResult[selection].collectionName+"</span></li>");
              podCast.append("<li>Primary Genre: <span>"+dataResult[selection].primaryGenreName+"</span></li>");
              $(".button-add").prepend("<li class='independent-button'><button><a href='"+dataResult[selection].collectionViewUrl+"' class='itunes-url' target='_blank'>&#63743</a></button></li>");
              podCast.append("<li class='rss-url'>"+dataResult[selection].feedUrl+"</li>");
              
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



