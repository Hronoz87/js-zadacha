console.log("Задача №7");

let min3 = -15;
let max3 = 15;

let x1 = Math.floor(Math.random() * (max3 - min3 +1)) + min3;
let y1 = Math.floor(Math.random() * (max3 - min3 +1)) + min3;
let r =  Math.floor(Math.random() * (max1 - min1 +1)) + min1;

let c1 = Math.sqrt(x1**2 + y1**2); // Длина гипотенузы

if (Math.floor(c1 < r)) {
    console.log("Точка принадлежит кругу");
} else {
    console.log("Точка не принадлежит кругу");
}