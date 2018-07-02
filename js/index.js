var color = ["#82DDF0","#FFD063","#EE6C4D","#861388","#1F2041","#18206F","#3DA35D","#FF473A","#83858C","#2292A4","#F46197"];
var Quote = "", Author = "";

function getQuotes(){
  $.ajax({
  type: "GET",
  headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
  url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
  success: function(data){
  // var newData = JSON.parse(data);
  // console.log(data);
  Quote = data[0].quote;
  Author = data[0].author;

  $(".quote-text").animate({
   opacity: 0 
  },400,function(){
    $(this).animate({
      opacity: 1
    },400);
    $("#quote-display").html(Quote);
  });
  
  $("#quote-author").animate({
   opacity: 0 
  },400,function(){
    $(this).animate({
      opacity: 1
    },400);
    $(this).html('- ' + Author);
  });
  
  var randomColor = Math.floor(Math.random()*11);
  $("body").animate({
    backgroundColor: color[randomColor],//jQuary.animate不支援backgroundColor屬性 必須引入jQuary-UI
    color: color[randomColor]
  },800);
    
  $("button").animate({
    backgroundColor: color[randomColor],//jQuary.animate不支援backgroundColor屬性 必須引入jQuary-UI
  },800);
  }
  
 });
  
};
$(document).ready(function(){
  getQuotes();
  $("#newQuote").on("click", getQuotes);
  $(".twitter").on("click", function(){
    $(".twitter").attr("href","https://twitter.com/intent/tweet?text=" + encodeURIComponent("“" + Quote + "” - " + Author) + "&hashtags=quote");
  });
  $(".tumblr").on("click", function(){
    $(".tumblr").attr("href","https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption="+ encodeURIComponent(Author)+"&content="+ encodeURIComponent(Quote)+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbutton");
  })
});
