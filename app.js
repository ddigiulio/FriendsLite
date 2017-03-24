$(window).on("load", function (e) {
  //console.log(e);
  //console.log("HERE");
});

console.log(localStorage.getItem("accessToken"));

//var ACCESSTOKEN = 
var URL = "https://api.instagram.com/v1/users/self/media/liked?access_token=" + ACCESSTOKEN;

var listTemplate = '';


$.get(URL, function (data) {
  console.log(data);
  console.log(data.data);

  for (var i = 0; i < data.data.length; i++) {
    var imageURL = data.data[i].images.standard_resolution.url;
    listTemplate += ("<img src=" +
      imageURL +
      " alt=item" + i + ">");
  }

  $('.results').html(listTemplate);



  });