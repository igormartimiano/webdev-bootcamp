let answer = prompt('Are we there yet?');

while(answer.indexOf('Yes') >= 0) {
    answer = prompt('Are we there yet?');
}

alert('Finally!');