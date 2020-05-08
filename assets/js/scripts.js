const api = {
   key: "a0c255a0bf59e3ffd26016f21ab12548",
   base: "https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (event.keyCode == 13) {
        getResults(searchbox.value);
        console.log('searchbox.value');
    }
}

function getResults (query) {
    fetch (`${api.base}forecast/?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
    console.log('query')
}

function displayResults (weather) {
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.city.name}, ${weather.city.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder (now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.list[0].main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector ('.current .weather')
    weather_el.innerText = weather.list[0].weather[0].description;

    let hilow = document.querySelector ('.hi-low');
    hilow.innerText = `Highest ${Math.round(weather.list[0].main.temp_max)}°C / Lowest ${Math.round(weather.list[0].main.temp_min)}°C`;

    let icon1 = weather.list[0].weather[0].icon;
    let icon2 = weather.list[8].weather[0].icon;
    let icon3 = weather.list[16].weather[0].icon;
    let icon4 = weather.list[24].weather[0].icon;
    let icon5 = weather.list[32].weather[0].icon;
    let icon6 = weather.list[39].weather[0].icon;

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.querySelector('.day1 .weekday').innerText= getWeekDay(tomorrow);
    document.querySelector('.day1 .temp').innerText = `${Math.round(weather.list[8].main.temp)}°C`;
    document.querySelector ('.day1 .weather').innerText = weather.list[8].weather[0].description;
    document.querySelector ('.day1 .hi-low').innerText = `${Math.round(weather.list[8].main.temp_max)}°C / ${Math.round(weather.list[8].main.temp_min)}°C`;
    document.querySelector ('.day1 img').src = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";
   
    var dayafter1 = new Date();
    dayafter1.setDate(dayafter1.getDate() + 2);
    document.querySelector('.day2 .weekday').innerText= getWeekDay(dayafter1);
    document.querySelector('.day2 .temp').innerText = `${Math.round(weather.list[16].main.temp)}°C`;
    document.querySelector ('.day2 .weather').innerText = weather.list[16].weather[0].description;
    document.querySelector ('.day2 .hi-low').innerText = `${Math.round(weather.list[16].main.temp_max)}°C / ${Math.round(weather.list[16].main.temp_min)}°C`;
    document.querySelector ('.day2 img').src = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";
    

    var dayafter2 = new Date();
    dayafter2.setDate(dayafter2.getDate() + 3);
    document.querySelector('.day3 .weekday').innerText= getWeekDay(dayafter2);
    document.querySelector('.day3 .temp').innerText = `${Math.round(weather.list[24].main.temp)}°C`;
    document.querySelector ('.day3 .weather').innerText = weather.list[24].weather[0].description;
    document.querySelector ('.day3 .hi-low').innerText = `${Math.round(weather.list[24].main.temp_max)}°C / ${Math.round(weather.list[24].main.temp_min)}°C`;
    document.querySelector ('.day3 img').src = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";

    var dayafter3 = new Date();
    dayafter3.setDate(dayafter3.getDate() + 4);
    document.querySelector('.day4 .weekday').innerText= getWeekDay(dayafter3);
    document.querySelector('.day4 .temp').innerText=  `${Math.round(weather.list[32].main.temp)}°C`;
    document.querySelector('.day4 .weather').innerText= weather.list[32].weather[0].description;
    document.querySelector('.day4 .hi-low').innerText= `${Math.round(weather.list[32].main.temp_max)}°C / ${Math.round(weather.list[32].main.temp_min)}°C`;
    document.querySelector ('.day4 img').src = "http://openweathermap.org/img/wn/" + icon4 + "@2x.png";
    
    var dayafter4 = new Date();
    dayafter4.setDate(dayafter4.getDate() + 5);
    document.querySelector('.day5 .weekday').innerText= getWeekDay(dayafter4);
    document.querySelector('.day5 .temp').innerText=  `${Math.round(weather.list[39].main.temp)}°C`;
    document.querySelector('.day5 .weather').innerText= weather.list[39].weather[0].description;
    document.querySelector('.day5 .hi-low').innerText= `${Math.round(weather.list[39].main.temp_max)}°C / ${Math.round(weather.list[39].main.temp_min)}°C`;
    document.querySelector ('.day5 img').src = "http://openweathermap.org/img/wn/" + icon5 + "@2x.png";

    


    
   
}



function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June",
    "july", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    let day = days[d.getDay ()];
    let date = d.getDate ();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}


// forecast

function getWeekDay(date){
    //Create an array containing each day, starting with Sunday.
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    //Use the getDay() method to get the day.
    var day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}
 

 
//What weekday is tomorrow?
