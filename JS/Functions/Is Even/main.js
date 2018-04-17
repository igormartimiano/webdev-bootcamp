let num = parseInt(prompt('Is this number even?'));

let isEven = num => {
    if(num % 2 === 0) {
        alert('Yes! ' + num + ' is an even number.');
        return true;
    }
    
    alert('It\'s not. ' + num + ' is an odd number.')
    return false
}

isEven(num);