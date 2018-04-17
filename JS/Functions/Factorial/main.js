let num = parseInt(prompt('Factor this number'));

let factorial = num => {
    if (Number.isInteger(Number(num)) && num > 0) {
        let result = 1;

        for (let i = 2; i <= num; i++) {
            result *= i;
        }

        alert('The factorial of ' + num + ' is ' + result);
        return result;
    }
    alert('Insert a valid number.');
}

factorial(num);