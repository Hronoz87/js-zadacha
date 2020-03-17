console.log ("Задача №16");

let arr1 = [], arr1Lenght = Math.floor(Math.random()*11);

for (let index = 0; index < arr1Lenght; index++) {
    arr1[index] = Math.floor(Math.random()*101);
    
}
console.log(arr1);
let arr4 = arr1;
arr4.reverse();
console.log(arr4);