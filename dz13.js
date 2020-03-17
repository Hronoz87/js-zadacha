console.log ("Задача №13");

let rand = 1000;
let q = 0;

for (let i = 0; i < rand; i++) {
   let temp = Math.floor(Math.random()*1001)%2;
   if ( temp == 0) {
    q = q + 1;
   }else{}
    
    

}
console.log(q/rand*100 + "%");