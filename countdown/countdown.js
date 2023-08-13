const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023,7,20,11,59,0);
// month is zero index based 

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 59, 0);

// const day = 
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${date} ${month} ${year}, ${hours}:${mins} pM`

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    // 1s = 1000ms 
    // 1m = 60s 
    // 1hr = 60min 
    // 1d = 24hr
    
    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    const oneSec = 1000;


    let dayMili = Math.floor(t / oneDay);
    let hoursMili = Math.floor((t % oneDay) / oneHour);
    let minsMili = Math.floor((t % oneHour) / oneMin);
    let secsMili = Math.floor((t % oneMin) / oneSec);

    const timeLeft = [dayMili, hoursMili, minsMili, secsMili]
    
    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item;
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(timeLeft[index])
    })

    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!!!</h4>`
    }

}

//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();

