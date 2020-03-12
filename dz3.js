console.log("Задча #3");
let a1 = Math.floor(Math.random()*10);
let b1 = Math.floor(Math.random()*10);
let a2 = Math.floor(Math.random()*10);
let b2 = Math.floor(Math.random()*10);

let k = (b1 -b2)/(a1 - a2);
let b3 = b2 - k * a2;
 console.log(" y =" + k + "x" + " - " + b3);