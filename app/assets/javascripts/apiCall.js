function fetchData(){
$.ajax ({
    url: "https://itunes.apple.com/search?parameterkeyvalue&entity=podcast&term=joe+rogan",
    type: "GET",
    dataType: "jsonp",
    success: function(data) { 
      var result = data.results[0].trackName;
      $("#podcast").html(result)
    },
  });
}

fetchData();