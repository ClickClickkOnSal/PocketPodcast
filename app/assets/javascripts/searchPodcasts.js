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
        $("#option").html("");
        for(var i = 0; i < data.resultCount; i ++) {
              var options = data.results[i].collectionName;
            $("#option").append("<li><a href='#' id='"+i+"' class='choices'>"+options+"</a></li>");
        };

        $(".choices").on("click", function(event) {
            event.preventDefault();

            $("#option").html("");
            var podCast = $("#podcast")
            var dataResult = data.results
            var selection = $(this).attr("id");

            podCast.html(dataResult[selection].artistName);
            podCast.append(dataResult[selection].collectionName);
            podCast.append(dataResult[selection].collectionViewUrl);
            podCast.append(dataResult[selection].artworkUrl600);
            podCast.append(dataResult[selection].primaryGenreName);
        });
      },
    });
  });
});



