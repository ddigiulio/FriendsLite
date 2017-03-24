$(window).on("load", function (e) {
  //console.log(e);
  //console.log("HERE");
});

var ACCESSTOKEN = "4654737219.ad1ff53.feb5c1991ca64a4fa0b6579cefa873fd";
var endPoint = "https://api.instagram.com/v1/users/self/?access_token=";
var URL = endPoint + ACCESSTOKEN;

$.get(URL, function(data) {
console.log(data);
});