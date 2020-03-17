console.log("Задача №15");

let val3 = prompt("Введите количество чисел Фибоначчи");

let val4 = 1;
let val5 = 1;
console.log(val4);
console.log(val5);

for (let i = 3; i <= val3; i ++) {
    
    let temp = val4 + val5;
    val4 = val5;
    val5 = temp;
    console.log(temp);
    
}
   