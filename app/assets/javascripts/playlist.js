$(document).ready(function() {

  $(".search-pc-container").on("click", function() {
    $(".podcast-show").html("");
    $(".notice").html("");
    $(".search-pc-container").show();
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newPlaylist = $("[type='create-list']").val();
    $("[type='create-list']").val("");

    $.ajax ({
      url: "/playlists",
      method: "POST",
      dataType: 'json',
      data: { playlist: { name: newPlaylist } },
      success: function(data) {
        $(".list-all-playlists").prepend("<li><a href='/playlists/"+data.id+"'>"+data.name+"</a></li>")
      }
    });

  });
});