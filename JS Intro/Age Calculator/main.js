let ageCalc = () => {
    let age = prompt('How old are you?');

    if (Number.isInteger(Number(age)) && age > 0) {
        let daysAlive = age * 365.25;
        let str = alert('You\'ve been alive for ' + daysAlive + ' days.\nThat\'s scary, I know.');

        return str;
    } else {
        let ageInvalid = alert('Please insert a valid age.');

        return err;
    }
}

ageCalc();