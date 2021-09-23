var nasaApiKey = "1llD9DAh0o9mULhBTzPplZoykdIkOTrg66rQ4ciP";
var natParkApiKey = "I1t6bTsAuMW8WN9jdopUBpMPtyWv6bDT6L6tKgkB" //"HOc5nfvbGjSS66EfdDsWgh7bNIAeKEp9DwSgJTT4" might still be one? i do have it lol
var oWApiKey = "22699aa722b7a79950a6f5dfaa6a318e";
var bodyEl = $(".body");
var lat = ;
var lon = ;
var stateCode = ;
var searchBtn = ;
var checkList = $(".checklist");
var weatherEl = $(".weather");
var nasaURL = "https://api.nasa.gov/planetary/earth/imagery?lon=-110.5471695&lat=44.59824417&date=2020-09-22&api_key=" + nasaApiKey;
var natParkURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&api_key=" + natParkApiKey;
var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + oWApiKey;


// General path forward:
    // 1. State input and then park code input
    // 2. Call function from NPS, based on state code input 
        // 2a. This brings up a list of the parks that are in that state, with name and park code
    // 3. Call function for the state park that is on the button click from the park code input search
        // 3a. This will search the NPS for the specific park that has been selected
    // 4. Call function for weather based on the lat/lon from the state park
    // 5. Call function for the satellite image based on the lat/lon from the state park 

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

