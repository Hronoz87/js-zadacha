console.log("Задча #4");

let min1 = -10;
let max1 = 10; 

let d = Math.floor(Math.random() * (max1 - min1 +1)) + min1;


let e = Math.floor(Math.random() * (max1 - min1 +1)) + min1;

let f = Math.floor(Math.random() * (max1 - min1 +1)) + min1;

let d1 = d*e*f;
let e1 = d+e+f;

console.log (d1);
console.log (e1);

if (d1 >= e1) {
    console.log ( d1 + 3);
} else {
    console.log (e1 + 3);
}


     
