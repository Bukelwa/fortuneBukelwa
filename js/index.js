

var main = function() {
  $('.cookie').click(function() {
    $.ajax({
      dataType: "jsonp",
      jsonpCallback: "parseQuote",
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
      success: function(data) {
        $('.box').text(data.quoteText);
        $('.share-quote').on("click", function() {
        window.open("https://www.twitter.com/intent/tweet?text=" + data.quoteText );

      });
        //   $('#author').text(results.quoteAuthor);
      }
    });
  })
///////
}
 

$(document).ready(main);


 
  
