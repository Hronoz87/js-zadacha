console.log("Задача #1");
let n = Math.floor(Math.random()*1000000);
let y = Math.floor(Math.random()*10);
let p = 12/100;

let m = ( n * p * (1+p)** y) / (12 * (1+p)** y-1) ;

let s = (m*12)*y; 

console.log(m);
console.log(s);

