console.log("Задача №6");


let a7 = Math.floor(Math.random() * (max1 - min1 +1)) + min1;
let b7 = Math.floor(Math.random() * (max1 - min1 +1)) + min1;

if (a5 >= 0 && b7 >= 0) {
    console.log(a5, b7, "Точка принадлежит 1 четверти");
} else if (a5 == 0 && b7 == 0) {
        console.log (a5, b7, "Начало координат");
} else if (a5 < 0 && b7 > 0) {
        console.log (a5, b7, "Точка принадлежит 2 четверти");
} else if (a5 < 0 && b7 < 0) {
        console.log (a5, b7, "Точка принадлежит 3 четверти");
} else if (a5 > 0 && b7 < 0) {
        console.log (a5, b7, "Точка принадлежит 4 четверти");
}
