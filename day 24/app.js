let getInfo = document.querySelector("#getInfo");
let displayTime = document.querySelector("#displayTime");
let displayWeather = document.getElementById("displayWeather");
let displayTemperature= document.querySelector("#displayTemperature");
let temperatureInCelcius = document.querySelector("#temperatureInCelcius");
let temperatureInFarenheit = document.querySelector("#temperatureInFarenheit");
let feelLikeTemperature = document.querySelector("#feelLikeTemperature");
let maxTemp = document.querySelector("#maxTemp");
let minTemp = document.querySelector("#minTemp");
let tempInfo = document.querySelector("#tempInfo");
let showInfoImage = document.querySelector("#showInfoImage");
let displayHumidity = document.querySelector("#displayHumidity");
let humidity = document.querySelector("#humidity");
let body = document.querySelector("body");
getInfo.addEventListener('click',()=>{
    let Country = document.querySelector("#inputCountry");
    let city = document.querySelector("#inputCity");
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${Country.value}/${city.value}&day`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    async function p1(){
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            return JSON.parse(result);
        } catch (error) {
            console.error(error);
        }
    };
    p1().then((msg)=>{
        console.log(msg);
        let str = msg.location.localtime + " " + msg.location.region + "," + msg.location.country;
        displayTime.innerText = str;
        showInfoImage.src = `https:${msg.current.condition.icon}`;
        temperatureInCelcius.innerText = `Temparature : ${msg.current.temp_c} degree`;
        temperatureInFarenheit.innerText = msg.current.temp_f;
        feelLikeTemperature.innerText = msg.current.feelslike_c;
        maxTemp.innerText = msg.forecast.forecastday[0].day.maxtemp_c;
        minTemp.innerText = msg.forecast.forecastday[0].day.mintemp_c;
        tempInfo.innerText = msg.current.condition.text;
        humidity = msg.current.humidity;
    })
});


