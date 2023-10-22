const gif = document.getElementById("gif");
const sound = document.getElementById("sound");
const container = document.getElementById("animation-container");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
    container.style.display = "block"; // Show the container
    sound.play(); // Play the sound
    setTimeout(() => {
        container.style.display = "none"; // Hide the container after a delay
    }, 2000); // Adjust the delay as needed (2 seconds in this example)
});
