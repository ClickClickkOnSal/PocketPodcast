$(document).ready(function() {
  $(".add-to-playlist").on("click", function() {
    $.ajax ({
      url: "/playlists",
      method: "GET",
      dataType: "json",
      success: function(data) {
        $(".button-add").html("<li>Select Which Playlist To Add To</li>")
        for(var i = 0; i < data.length; i++) {
          $(".button-add").append("<li><button class='to-playlist' id='"+data[i].id+"'>"+data[i].name+"</button></li>")
        }
      },
    });
  });

  $("body").on("click", ".to-playlist", function() {
    var selectionId = $(this).attr("id");
    console.log(selectionId);
    var artistName = $(".artist").html();
    var collectionName = $(".collection").html();
    var itunesUrl = $(".itunes-url").prop('href');
    var imageUrl = $(".image-url").prop('src');
    var rssUrl = $(".rss-url").html();
    var primaryGenre = $(".primary-genre").html();
    $.ajax ({ 
      url: "/playlists/" + selectionId + "/podcasts",
      method: "POST",
      dataType: "json",
      data: { podcast: { artist_name: artistName, collection_name: collectionName, itunes_url: itunesUrl, image_url: imageUrl, rss_url: rssUrl, primary_genre: primaryGenre } },
      success: function (data) {
        $(".button-add").html("Added to Playlist Succefully!");
      },
    });
  });
});