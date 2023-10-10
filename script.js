const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');

let currentRotation = 0; // Track the current rotation of the wheel
const minRotation = 720; // Minimum degrees to rotate
const maxRotation = 1440; // Maximum degrees to rotate
let spinTime = 1000; // spin time in ms

function logHello() {
    console.log('hello');
}

function spinWheel() {
    // Generate a random degree between 720 and 1440 for each spin
    const randomDegree = Math.floor(Math.random() * (maxRotation - minRotation + 1)) + ((spinTime/1000) *360);
    

    // Calculate the total rotation including the current rotation
    const totalRotation = currentRotation + randomDegree;

    console.log("moving from " + currentRotation + " to " + totalRotation)

    // Apply the rotation animation to the wheel
    wheel.style.transition = `transform ${spinTime / 1000}s ease-out`;
    wheel.style.transform = `rotate(${totalRotation}deg)`;

    // Update the current rotation
    currentRotation = totalRotation;    

    // Disable the button temporarily to prevent multiple spins
    spinButton.disabled = true;

    intervalId = setInterval(logHello, 1000); // Log 'hello' every second

    // Reset the wheel after the animation
    setTimeout(() => {
        wheel.style.transition = 'none';
        spinButton.disabled = false;
        clearInterval(intervalId)
    }, spinTime);
}

spinButton.addEventListener('click', spinWheel);