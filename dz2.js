console.log("Задача #2");
let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*100);
let c = Math.floor(Math.random()*100);

let D = Math.pow(b, 2) - 4*a*c;

if (D < 0) {
    console.log ("Корней нет");
}   else if (D == 0) {
    console.log ("Один корень");
    let x = -b + Math.sqrt(D)/2*a;
    console.log (x);

}   else if (D > 0) {
    console.log ("Два корня");
    let x1 = -b + Math.sqrt(D)/2*a;
    let x2 = -b - Math.sqrt(D)/2*a;
    console.log(x1, x2);
}
