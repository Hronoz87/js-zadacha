console.log("Задание №18");

let array1 = [];
array1Length =  11;

for (let i = 0; i < array1Length; i ++) {
    array1[i] = Math.floor(Math.random()*(100 - (-20) + 1)) - 20;
} 
let sum = 0;
let sr_sum = 0;
for (let i = 0; i < array1Length; i ++) {
    sum += array1[i];
    sr_sum = sum / array1Length;
}
let array2 = [];
for (let i = 0; i < array1Length; i ++){
    if (sr_sum > array1[i]) {
     let temp = array1[i];
     array2[i] = temp;
      
    
    }
    
}




console.log(array1);
console.log(sum);
console.log(sr_sum);
console.log (array2);