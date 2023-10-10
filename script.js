const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const resetButton = document.getElementById('resetButton');

let currentRotation = 0; // Track the current rotation of the wheel
const minRotation = 720; // Minimum degrees to rotate
const maxRotation = 1440; // Maximum degrees to rotate
let totalRotation = 0
let spinTime = 10000; // spin time in ms
let logTime = 100 // log frequency in ms
let seconds = 0


function logHello() {
    seconds += logTime/1000
    console.log("Current degrees: " +  Math.floor(((totalRotation - currentRotation) / (spinTime / 1000)) * seconds + 0.5))
}

function spinWheel() {
    // Generate a random degree between 720 and 1440 for each spin
    const randomDegree = Math.floor(Math.random() * (maxRotation - minRotation + 1)) + ((spinTime/1000) *360);
    

    // Calculate the total rotation including the current rotation
    totalRotation = currentRotation + randomDegree;

    console.log("moving from " + currentRotation + " to " + totalRotation)

    // Apply the rotation animation to the wheel
    wheel.style.transition = `transform ${spinTime / 1000}s ease-out`;
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    intervalId = setInterval(function () {
        logHello()
    }, logTime); // Log 'hello' every second

       

    // Disable the button temporarily to prevent multiple spins
    spinButton.disabled = true;    

    // Reset the wheel after the animation
    setTimeout(() => {
        wheel.style.transition = 'none';
        spinButton.disabled = false;
        clearInterval(intervalId)
        currentRotation = totalRotation; 
    }, spinTime);
}

function resetWheel() {

}

spinButton.addEventListener('click', spinWheel);
resetButton.addEventListener('click', resetWheel);