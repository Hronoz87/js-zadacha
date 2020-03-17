console.log ("Задача №11");

let n2 = 123456;
console.log(n2);
let m2 = 0;
while (n2 > 0) {
    m2 = Math.floor(m2*10 + n2%10);
    n2 = Math.floor(n2/10);
}

console.log(m2);