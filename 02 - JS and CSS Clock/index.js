const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function currentSecond() {
    const now = new Date();
    console.log(now.getSeconds());
    
    const secToDeg = now.getSeconds() / 60 * 360 + 90;
    const hands = document.querySelectorAll('.hand');
    
    hands.forEach((hand) => {
        if (now.getSeconds() == 0) {
            hand.style.transition = "all";
        } else if (now.getSeconds() == 1) {
            hand.style.transition = "all 0.05s"
        }
    })

    secondHand.style.transform = `rotate(${secToDeg}deg)`

}

function currentMinute() {
    const now = new Date();
    console.log(now.getMinutes());
    const minToDeg = now.getMinutes() / 60 * 360 + 90;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`    
}

function currentHour() {
    const now = new Date();
    console.log(now.getHours());
    const hourToDeg = (now.getHours() + (now.getMinutes() / 60)) / 12 * 360 + 90;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`
}

setInterval(currentSecond, 1000);
setInterval(currentMinute, 1000);
setInterval(currentHour, 1000);