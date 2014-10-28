$(document).ready(function() {

  $("#playlist").on("click", function() {
    $(".option").html("");
    $(".podcast").html("");
    $(".create-form").show();
    $(".submit-create").show();
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
        url += "&" + data.id;
        console.log(data.id);
      }
    });
  });
  // for adding playlist when searching for podcasts
  // $(".add-to-playlist").on("click", function() {
  // });
});