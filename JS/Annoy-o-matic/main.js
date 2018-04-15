let answer = prompt('Are we there yet?');

while(answer !== 'Yes' && answer !== 'yes' && answer !== 'y' && answer !== 'yea') {
    answer = prompt('Are we there yet?');
}

alert('Finally!');