let loc = document.getElementById('location');
let forecastDiv = document.getElementById('forecast');
let currentDiv = document.getElementById('current');
let upcomingDiv = document.getElementById('upcoming');
 
let symbols = {
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☂',
    'degrees': '°'
}
 
function attachEvents() {
    let getBtn = document.getElementById('submit');
    getBtn.addEventListener('click', getWeather);
}
 
attachEvents();
 
async function getWeather(){
    forecastDiv.style.display = 'block';
 
    currentDiv.innerHTML = '<div class="label">Current conditions</div>';
    upcomingDiv.innerHTML = '<div class="label">Three-day forecast</div>';
 
    let url = `http://localhost:3030/jsonstore/forecaster/locations`;
    try {
        const response = await fetch(url);
        const locations = await response.json();
 
        let validLocation = locations.find((l) => l.name == loc.value);
    
        if(validLocation){
 
          let currentConditionUrl = `http://localhost:3030/jsonstore/forecaster/today/` + validLocation.code;
          let threeDayConditionUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/` + validLocation.code;
    
            const [currentResponse, threeDayResponse] = await Promise.all([
                fetch(currentConditionUrl), fetch(threeDayConditionUrl)
             ]);
 
            const currentData = await currentResponse.json();
            const threeDayData = await threeDayResponse.json();
             
             renderTodayWeather(currentData);
 
            renderThreeDayWeather(threeDayData);
 
        } else {
            throw new Error();
        }
        
    } catch(err){
        forecastDiv.textContent = 'Error';
    }
}
 
function renderThreeDayWeather(threeDayData){
    
    let spans = threeDayData.forecast.map((cur) => {
        let spanUpcoming = e('span', ['upcoming'], '', [
            e('span', ['symbol'], symbols[cur.condition]),
            e('span', ['forecast-data'], `${cur.low}°/${cur.high}°`),
            e('span', ['forecast-data'], cur.condition)
        ])
 
        return spanUpcoming;
    })
 
    let upcomingForecast = e('div', ['forecast-info'], '', spans);
    upcomingDiv.appendChild(upcomingForecast);
}
 
function renderTodayWeather(currentData){
    let spanSymbol = e('span', ['condition', 'symbol'], symbols[currentData.forecast.condition]);
    let spanCondition = e('span', ['condition'], '', [
        e('span', ['forecast-data'], currentData.name),
        e('span', ['forecast-data'], `${currentData.forecast.low}°/${currentData.forecast.high}°`),
        e('span', ['forecast-data'], currentData.forecast.condition)
    ])
 
    let children = [spanSymbol, spanCondition];
    let currentForecast = e('div', ['forecasts'], '', children);
    currentDiv.appendChild(currentForecast);
}
 
function e(type, classList, text, children){
    let el = document.createElement(type);
 
    if(classList){
        classList.forEach((c) => el.classList.add(c));
    }
 
    if(text){
        el.textContent = text;
    }
 
    if(children){
        children.forEach((c) => el.appendChild(c));
    }
 
    return el;
}