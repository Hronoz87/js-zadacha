console.log ("Задача №9");

let x5 = prompt ("Введите число от 100000 до 1000000");

let len = x5.length;
x5 = Number(x5);

let s1 = 0;
let s2 = 0;

for ( let i = 0; i < len.length; i ++) {
    s1 = x5 % 10;
    s2 += s1;
    x5 = parseInt(x5/10);
    
}

console.log(s2);