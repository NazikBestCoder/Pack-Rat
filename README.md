# Pack-Rat

## Description

This app was designed to be a one-stop for a trip planned to a National Park in the U.S. By providing satellite imagery, weather information, and a packing list helped by localStorage, any trip planned to the parks is easy to prepare for with Pack-Rat!

## Usage

This app functions simply, using two dropdown menus - one for state and one for the specific park in that state. Once a park is selected, calling upon the National Park Service (NPS) API, the NASA API provides satellite imagery of the latitude and longitude of said park. Then the OpenWeatherMap API provides in-the-moment weather for the park. In addition, there is a packing list in which necessary items for a trip to the park can be logged. These items are stored even upon page load (utilizing localStorage) and can be checked off as they are procured. The webpage is adapted properly for mobile devices as well as larger screens meaning, even on the go, your trip can be planned and up-to-date weather information can be accessed. Never be unprepared with Pack-Rat!

The app is live at this URL: https://nazikbestcoder.github.io/Pack-Rat/

and here is a GIF walkthrough of the final product: ![Weather Dashboard Screenshot](./assets/WDashboardScr.PNG/)

## Credits

This project was possible with collaboration from the following individuals:
[Andrew Currie](https://github.com/curriecoder),
[Lia O'Brien](https://github.com/liaobrien),
[Nazik Askarbekkyzy](https://github.com/NazikBestCoder), and
[Phil Bohn](https://github.com/lamperouge1218).

In addition, the docs for the following APIs were used:
[NPS API](https://www.nps.gov/subjects/developer/api-documentation.htm#/parks/getPark),
[NASA API](https://api.nasa.gov/), and
[OpenWeatherMap](https://openweathermap.org/api/one-call-api).

The docs for [Bulma](https://bulma.io/documentation/overview/start/) were used to learn the CSS framework as were the [JQuery](https://api.jquery.com/) docs to help with logic functionality. 

## License 

MIT License

Copyright (c) [2021] [PhilBohn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.