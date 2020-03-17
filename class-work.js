console.log("Работа в классе");

let arr = [], arrLenght = 10;
    minArrValue = -100, maxArrValue = 100;

for (let ind = 0; ind < arrLenght; ind++) {
    arr[ind] = Math.floor(Math.random() * (maxArrValue - minArrValue +1)) + minArrValue; 
}

let indMin = 0, indMax = 0;
for ( let ind = 1; ind < arrLenght; ind++) {
    if (arr[ind] < [indMin]) {
        indMin = ind;
    }
    if (arr[ind] > [indMax]) {
        indMax = ind;
    }
}  

let temp = arr[indMin];
arr[indMin] = arr[indMax];
arr[indMax] = temp;

console.log (arr);
console.log (indMin);
console.log (arr[indMin]);
console.log (indMax);
console.log (arr[indMax]);