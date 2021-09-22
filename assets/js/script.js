var nasaApiKey = "1llD9DAh0o9mULhBTzPplZoykdIkOTrg66rQ4ciP";
var natParkApiKey = "I1t6bTsAuMW8WN9jdopUBpMPtyWv6bDT6L6tKgkB" //"HOc5nfvbGjSS66EfdDsWgh7bNIAeKEp9DwSgJTT4" might still be one? i do have it lol
var oWApiKey = "22699aa722b7a79950a6f5dfaa6a318e";
var bodyEl = $(".body");
var lat = ;
var lon = ;
var stateCode = ;

// "latitude": "44.59824417",
// "longitude": "-110.5471695",

var nasaURL = "https://api.nasa.gov/planetary/earth/imagery?lon=-110.5471695&lat=44.59824417&date=2020-09-22&api_key=" + nasaApiKey;
var natParkURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&api_key=" + natParkApiKey;
var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + oWApiKey;


fetch (nasaURL)
    .then (function (response){
        return response.blob();
    })
    .then (function (data){
        console.log(data);
        var nasaImage = URL.createObjectURL(data);
        var satImage = $("<img>").attr("src", nasaImage);
        $(bodyEl).append(satImage);
    })

