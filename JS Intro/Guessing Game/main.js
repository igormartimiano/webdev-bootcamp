let guess  = parseInt(prompt('Guess a number'), 10);
let target = 10;

let guessGame = (guess, target) => {
    let tries = 0;

    if (Number.isInteger(Number(guess)) && guess > 0) {
        if (guess < target) {
            tries += 1;
            alert('Too low.');
        } else if (guess > target) {
            tries += 1;
            alert('Too high.');
        } else if (guess === target) {
            tries += 1;
            alert('Ding-dong! You got it!');
        } else {
            alert('Please insert a valid number.');
        }
    } else {
        alert('Please insert a valid number.');
    }
}

guessGame(guess, target);