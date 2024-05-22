let a = 10;
let b = 5 + 5;
console.log(a, typeof a); // on utilise typeof pour avoir le type du variable
a = parseInt(a); //le parseint permet de convertir en number => a = 10
console.log(a == b); // boolean true le (==) teste uniquement la valeur => la chaine "10" est convertie en number

let a = 11;
let b = 5 + 5;

console.log(a != b); //different  operateur (==; <=; >=; !=) le (===)teste le type et la valeur
