var nasaApiKey = "1llD9DAh0o9mULhBTzPplZoykdIkOTrg66rQ4ciP";
var natParkApiKey = "I1t6bTsAuMW8WN9jdopUBpMPtyWv6bDT6L6tKgkB" //"HOc5nfvbGjSS66EfdDsWgh7bNIAeKEp9DwSgJTT4" might still be one? i do have it lol
var oWApiKey = "22699aa722b7a79950a6f5dfaa6a318e";
var bodyEl = $(".body");

// "latitude": "44.59824417",
// "longitude": "-110.5471695",

var nasaURL = "https://api.nasa.gov/planetary/earth/imagery?lon=-110.54&lat=44.59&date=2014-02-01&api_key=" + nasaApiKey;

fetch (nasaURL)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        var satImage = $("<img>").attr("src", nasaURL);
        $(bodyEl).append(satImage);
    })

