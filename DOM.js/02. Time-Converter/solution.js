function attachEventsListeners() {

    let dayInput = document.getElementById('days');
    let hourInput = document.getElementById('hours');
    let minInput = document.getElementById('minutes');
    let secInput = document.getElementById('seconds');

    let btnDay = document.getElementById('daysBtn').addEventListener('click', day);
    let btnHour = document.getElementById('hoursBtn').addEventListener('click',hour);
    let btnMin = document.getElementById('minutesBtn').addEventListener('click',min);
    let btnSec = document.getElementById('secondsBtn').addEventListener('click',sec);

    function day(e){
            hourInput.value = Number(dayInput.value * 24);
            minInput.value = Number(hourInput.value * 60);
            secInput.value = Number(minInput.value * 60);  
            
    }

    function hour(e){
            dayInput.value = hourInput.value  / 24;
            minInput.value = hourInput.value * 60;
            secInput.value = minInput.value * 60;

    }

    function min(e){
            hourInput.value = minInput.value / 60;
            dayInput.value = hourInput.value / 24;
            secInput.value = minInput.value * 60;

    }

    function sec(e){
        minInput.value = secInput.value / 60;
        hourInput.value = minInput.value / 60;
        dayInput.value = hourInput.value / 24;
    }

}