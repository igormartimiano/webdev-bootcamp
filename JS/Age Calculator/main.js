let ageCalc = () => {
    let age = prompt('How old are you?');

    if (Number.isInteger(Number(age)) && age > 0) {
        let daysAlive = age * 365.25;

        if (age > 122) {
            alert('Sugoi! You just broke the record of oldest person alive ever with ' + daysAlive + ' days being alive.');
        } else {
            alert('You\'ve been alive for ' + daysAlive + ' days.\nThat\'s scary, I know.');
        }
    } else {
        alert('Please insert a valid age.');
    }
}

ageCalc();