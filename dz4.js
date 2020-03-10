console.log("Задча #4");

let min1 = -10;
let max1 = 10; 

let d = Math.floor(Math.random() * (max1 - min1 +1)) + min1;


let e = Math.floor(Math.random() * (max1 - min1 +1)) + min1;

let f = Math.floor(Math.random() * (max1 - min1 +1)) + min1;


let result = (Math.max(d*e*f, d+e+f)+3);
console.log(result);

     
 