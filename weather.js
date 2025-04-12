fetch("https://api.openweathermap.org/data/2.5/weather?q=cancun&appid=02eb6600162720bd99d4e318bd1f7bfb&units=metric")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Temperature " + data.main.temp +"\u00b0C"; // adding celcius symbol //
    feelslike.textContent = "Feels Like: " + data.main.feels_like +"\u00b0C";
    description.textContent ="" + data.weather.description;

    //inserting the icon

    icon.src = ("https://openweathermap.org/img/wn/") + data.weather[0].icon + "@2x.png";
}); 