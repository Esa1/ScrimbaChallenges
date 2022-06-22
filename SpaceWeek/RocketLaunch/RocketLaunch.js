function startCountDown() {
let countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 4
let countDownId

// Task: 
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

function launchSuccessed() {
    const n = Math.floor( Math.random() * 3 ) + 1
    console.log(n)
}

function countDown() {
    console.log("countDown")
    if (--timeRemaining == 0) {
        //Test whether lauch is successfull
        if (launchSuccessed()) {
            //Launch rocket
            console.log("Launch rocket")
            clearInterval(countDownId)
            rocket.classList.add("rocket-launched")
            const fire = document.createElement("span")
            fire.innerHTML = "🔥"
            rocket.parentNode.insertBefore(fire, rocket.nextSibling)
        }
    }
    countdownDisplay.innerHTML = timeRemaining
}

/*function startCountDown() {
    console.log("startCountDown")
    countDownId = setInterval(countDown, 1000) 
}*/
countDownId = setInterval(countDown, 1000) 

// Stretch goals: 
// 1) Add fire under the rocket. 
// 2) Randomly don’t launch the rocket when the timer reaches 0.
}

