console.log ("Задача №9");

let x5 = 222222;
let res = 0;
let res1 = 1;

for (let i = 0; i < x5.length; i++) {
    res += Number(x5[i]);
}
for (let i = 0; i < x5.length  ; i++) {
    res1 *=Number(x5[i]);
}
console.log(res);
console.log(res1);
