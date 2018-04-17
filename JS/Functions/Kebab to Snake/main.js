let str = prompt('Insert a Kebab phrase to translate to snake');

let kebabToSnake = str => {
    str = str.replace(/-/g, '_');
    
    alert(str);

    return str;
}

kebabToSnake(str);