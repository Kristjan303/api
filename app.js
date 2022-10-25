document.addEventListener(`DOMContentLoaded`, cityWeather)

function weatherDataFetch(city){
    var key = "5919524c963e97110290a856859fbdec";
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function () {

        })
}

function cityWeather(e) {
    weatherDataFetch(`Kyoto`);
}

function drawWeather(data) {
    var celcius = Math.round(parseFloat(data.main.temp) -273.15);
    var description = data.weather[0].description;

    document.querySelector(`#description`).innerHTML = description;
    document.querySelector(`#temp`).innerHTML = celcius + `&deg;`;
    document.querySelector(`#location`).innerHTML = data.name;
}