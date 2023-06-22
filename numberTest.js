let a = 0;

for (let i = 0; i < 100; i++) {
    a += i;
    console.log(a);
}

a += 100;
console.log(a);

a **= 2;

console.log(a);


function addNumbers(a, b) {
    return a + b;
}

x = addNumbers(1, 2);

console.log(x);

let c = 'apple sauce';

for (let i = 0; i < c.length; i++) {
    console.log('c.charAt(' + i + ') = ' + c.charAt(i));
}


let freq = new Map();
for (let character in c) {
    if (freq.has(character)) {
        freq.set(character, );
    } else {
        freq.set(character, 1);
    }
}

for (const freqElement of freq) {
    console.log(freqElement)
}
