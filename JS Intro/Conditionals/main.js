let age = parseInt(prompt('How old are you?'), 10);

let validateAge = age => {
    if (Number.isInteger(Number(age)) && age > 0) {
        if (age === 21) {
            alert('Happy 21st birthday!');
        } else if (Math.sqrt(age) % 1 === 0) {
            alert('Your age is a perfect square!');
        } else if (!(age % 2 === 0)) {
            alert('Your age is odd!');
        } else {
            alert('Your age is: ' + age);
        }
    } else {
        alert('Oops! Type a valid age.');
    }
}

validateAge(age);