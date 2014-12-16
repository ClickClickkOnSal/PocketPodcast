$(document).ready(function() {
  function parseXml(){
  	var rssXmlUrl = $("#rss-url").html();
  	console.log(rssXmlUrl);
    url = rssXmlUrl;
    $.ajax({
      type: "GET",
      url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
      dataType: 'json',
      error: function(){
          alert('Unable to load feed, Incorrect path or invalid feed');
      },
      success: function(xml){
        values = xml.responseData.feed.entries;
      	console.log(values);
        console.log(xml.responseData);
        for(var i = 0; i <= 10; i++){
          if(values[i].link.slice(-4) == ".mp3"){
            if(i == 0){
          	  $(".audio-file").html("<div><h4>"+values[i].title+"</h4><br /><audio controls><source src='"+values[i].link+"' type='audio/mpeg'></audio></div>");
            }
            else {
              $(".audio-file").append("<div><h4>"+values[i].title+"</h4><br /><audio controls><source src='"+values[i].link+"' type='audio/mpeg'></audio></div>");
            }
          }
        }
      }
  	});
  };

  parseXml();
});
