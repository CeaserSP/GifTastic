$(document).ready(function(){
// Array topics
var topics= [
    "cars",
    "nascar",
    "formula1",
    "supercar"
];
// for loop to appends topics to html
for (var i= 0; i< topics.length; i++){
  var button = $("<button>" + topics[i] + "</button>");
  button.appendTo(".buttons");
}
//  get gifs by topic
var queryUrl= "https://api.giphy.com/v1/gifs/search?api_key=WsZdtxY39VcDAOsbH47aMxYUfXPCISyT&q=" + button + "&limit=10&offset=0&rating=G&lang=en"
// use loop to diplay ten gifs of the topic

// start and stop animation on click

// display rating under gif

});