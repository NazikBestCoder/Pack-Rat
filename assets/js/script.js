var nasaApiKey = "1llD9DAh0o9mULhBTzPplZoykdIkOTrg66rQ4ciP";
var natParkApiKey = "I1t6bTsAuMW8WN9jdopUBpMPtyWv6bDT6L6tKgkB" //"HOc5nfvbGjSS66EfdDsWgh7bNIAeKEp9DwSgJTT4" might still be one? i do have it lol
var oWApiKey = "22699aa722b7a79950a6f5dfaa6a318e";
var bodyEl = $(".body");
var lat;
var lon;
var searchBtn;
var selectText = $(".select-text");
var stateSelect = $(".state-select");
var dropCont = $(".select");
var checkList = $(".checklist");
var weatherEl = $(".weather");
var nasaURL = "https://api.nasa.gov/planetary/earth/imagery?lon=-110.5471695&lat=44.59824417&date=2020-09-22&api_key=" + nasaApiKey;
var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + oWApiKey;


// General path forward:
    // 1. State input [STATE INPUT WORKS AND LOGS PROPERLY] and then park code input
    // 2. Call function from NPS, based on state code input 
        // 2a. This brings up a list of the parks that are in that state, with name and park code
    // 3. Call function for the state park that is on the button click from the park code input search
        // 3a. This will search the NPS for the specific park that has been selected
    // 4. Call function for weather based on the lat/lon from the state park
    // 5. Call function for the satellite image based on the lat/lon from the state park 

dropCont.on("change", function () {
    console.log($(this).val());
    var stateCode = $(this).val();
    var natParkURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateCode + "&api_key=" + natParkApiKey;

    fetch(natParkURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            parkCodeHandler(data);
        })

    
        
});

function parkCodeHandler(data) {
    $(selectText).text("Select a Park");
    var parkSelect = $("<select>").attr("class", "select ml-2 park-select");
    $(stateSelect).append(parkSelect);
    // for loop iterating data from API pull and creating <option> tags 
    // for each of them and appending them to parkSelect
    // take data from the API pull and put it into the <option>s and then append
    $.each(function (data.data){

    })
    
}




// on click for dropdown content, event target item text or value to generate park list dropdown



















// fetch (nasaURL)
//     .then (function (response){
//         return response.blob();
//     })
//     .then (function (data){
//         console.log(data);
//         var nasaImage = URL.createObjectURL(data);
//         var satImage = $("<img>").attr("src", nasaImage);
//         $(bodyEl).append(satImage);
//     })

