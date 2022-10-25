document.addEventListener(`DOMContentLoaded`, cityWeather)

function weatherDataFetch(city){
    var key = "a19f0c57c30323d6fca1351aa55b22df";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {

        })
}

function cityWeather(e) {
    weatherDataFetch(`Tallinn`);
}