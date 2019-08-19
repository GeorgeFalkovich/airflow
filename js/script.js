
const cards = document.querySelectorAll('.city-card')
let cities = [];

for (let i = 0; i < cards.length; i++) {
    cities.push(cards[i].id);
}

async function fetchWeather(city) {
    var apiPath = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var apiKey = '&APPID=e1e3bc31c8dda22c6d01bb97103eb414&units=metric';
    var url = apiPath+city+apiKey; 
    let cardCity = document.querySelector('#' + city);
    const response = await fetch(url);
    const data = await response.json();

     if (data.cod === 200) {
        let temp = data.main.temp;
        let clouds = data.weather[0].main;
        cardCity.childNodes[1].childNodes[0].innerText = "Temeprature in " + city + " now \n"  +  temp + " DG \n " + clouds;
     
     }

    
}





for (let i = 0; i < cities.length; i++) {

    document.querySelector('#' + cities[i]).addEventListener('mouseover', () => {fetchWeather(cities[i])});

}






