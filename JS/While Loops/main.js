console.log('################# Ex 1 #################');

let int1 = -10;

while(int1 <= 19) {
    console.log(int1);
    int1++;
}


console.log('################# Ex 2 #################');

let int2 = 10;

while(int2 <= 40) {
    if(int2 % 2 === 0) {
        console.log(int2);
    }
    int2++;
}


console.log('################# Ex 3 #################');

let int3 = 300;

while(int3 <= 333) {
    if(!(int3 % 2 === 0)) {
        console.log(int3);
    }
    int3++;
}

console.log('################# Ex 4 #################');

let int4 = 5;

while(int4 <= 50) {
    if (int4 % 3 === 0 && int4 % 5 === 0) {
        console.log(int4);
    }
    int4++;
}