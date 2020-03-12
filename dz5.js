console.log("Задча #5");

let min2 = -100;
let max2 = 100;

let a5 = Math.floor(Math.random() * (max2 - min2 +1)) + min2;
let b5 = Math.floor(Math.random() * (max2 - min2 +1)) + min2;

if (a5/b5) {
    console.log ("Делиться", a5%b5, Math.floor(a5/b5));
}   else {
    console.log ("Не делиться");
}