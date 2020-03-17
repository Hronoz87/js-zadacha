console.log ("Задача №10");
let n3 = Math.floor(Math.random()*100);;
let sum1 = 0;
let sum2 = 0;
for ( let i = 1; i <= n3; i++ ) {
    sum1 += i;
}

for ( let i = 1; i <= n3; i++) {
    sum2 = i*(i +1) / 2;
}
 
console.log (sum1 === sum2);
console.log (sum1);