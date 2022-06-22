
const countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 1

// Task: 
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

function countDown() {
//    console.log("countDown")
    if (--timeRemaining == 0) {
        //Launch rocket
        console.log("Launch rocket")
        clearInterval(countDownId)
        rocket.classList.add("rocket-launched")
        const fire = document.createElement("span")
        fire.innerHTML = "🔥"
        rocket.appendChild(fire)
    }
    countdownDisplay.innerHTML = timeRemaining
}

let countDownId = setInterval(countDown, 1000) 
// Stretch goals: 
// 1) Add fire under the rocket. 
// 2) Randomly don’t launch the rocket when the timer reaches 0.


