let stalker = () => {
    let firstName = prompt('Whats your first name?');
    let lastName  = prompt('Whats your second name?');
    let age       = prompt('Whats your age?');
    
    let fullName = firstName + ' ' + lastName;

    let sentence = alert('Your name is ' + fullName + ' and you\'re ' + age + ' years old.');

    return sentence;
}

stalker();