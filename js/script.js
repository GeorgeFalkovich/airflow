const cards = document.querySelectorAll('.city-card')
let cities = [];

for (let i = 0; i < cards.length; i++) {
    cities.push(cards[i].id);
}




findWeather = (city) => {
  
    let cardCity = document.querySelector('#' + city);
    var apiPath = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var apiKey = '&APPID=e1e3bc31c8dda22c6d01bb97103eb414&units=metric';
    var url = apiPath+city+apiKey;  
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', url);
    myRequest.onload = function() {
        var getWeather = JSON.parse(myRequest.responseText);
        var cod = getWeather.cod; 
       
       if (cod === 200) {
        var temp = getWeather.main.temp;
        var clouds = getWeather.weather[0].main;
        cardCity.childNodes[1].childNodes[0].innerText = "Temeprature in " + city + " now \n"  +  temp + " DG \n " + clouds;
        
       }
        
        else {
            
        } 
    };

    myRequest.onerror = function() {
       console.log('error');
    };

    myRequest.send();
};

for (let i = 0; i < cities.length; i++) {

    document.querySelector('#' + cities[i]).addEventListener('mouseover', () => {findWeather(cities[i])});

}






