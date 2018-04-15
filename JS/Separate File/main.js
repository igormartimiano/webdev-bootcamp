let greet = () => {
    let userName = prompt('Type your user name here: ');

    return () => {
        alert("Nice to meet you, " + userName + "!");
    }
}

let greeting = greet();
greeting();