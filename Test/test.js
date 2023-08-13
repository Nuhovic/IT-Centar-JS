// Generisanje nasumičnog broja između 1 i 20 (uključujući 1 i 20)
const secretNumber = Math.floor(Math.random() * 20) + 1;

let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");

checkButton.addEventListener("click", function () {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
        message.textContent = "Molimo unesite broj između 1 i 20.";
        return;
    }

    attempts++;
    const difference = Math.abs(secretNumber - userGuess);

    if (difference < 3) {
        message.textContent = "Prilično blizu!";
    } else if (difference < 6) {
        message.textContent = "Blizu!";
    } else if (difference < 10) {
        message.textContent = "Veoma blizu!";
    } else {
        message.textContent = "Daleko!";
    }

    if (userGuess === secretNumber) {
        message.textContent = `Čestitamo! Pogodili ste broj ${secretNumber} nakon ${attempts} pokušaja.`;
        checkButton.disabled = true;
    }
});