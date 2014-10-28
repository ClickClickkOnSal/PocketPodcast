$(document).ready(function() {

  $("#playlist").on("click", function() {
    $(".option").html("");
    $(".podcast").html("");
    $(".create-form").toggle();
    $(".submit-create").toggle();
    $(".list-all-playlists").toggle();
    $(".notice").html("");
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
  // for adding playlist when searching for podcasts
  // $(".add-to-playlist").on("click", function() {
  // });
});