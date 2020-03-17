console.log("Задача №17");

let arr_new = [], arr_newlenght = 11;
    minArrValue = -100, maxArrValue = 100;
for (let i = 0; i < arr_newlenght; i ++) {
    arr_new[i] = Math.floor(Math.random() * (maxArrValue - minArrValue +1)) + minArrValue;
}

arr2lenght = Math.floor(arr_newlenght / 2);
console.log(arr_new);
let arr3 = arr_new;   


for (let i = 0; i < arr_newlenght-6; i++) {
    
    let temp = arr3[i];
    arr_new[i] = arr_new[arr_newlenght - arr2lenght + i];
    arr_new[arr_newlenght - arr2lenght + i] = temp;
   
}


console.log(arr3);