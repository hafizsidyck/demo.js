console.log("Hello guys");


// let nombre = 15;
// console.log("la valeur de la variable nombre est : ", nombre);

// let foisDeux = nombre * 2;
// console.log(foisDeux);
let message = "une chaine de caractère";
console.log(message);

// vrai ou faux ou booléen

let VraiFaux = true;
console.log(VraiFaux);

// tableau d'entiers

let TableauEntiers = [1, 2, 3, 4, 5]
console.log(TableauEntiers);

// tableau chaines (string)

let tableauChaines = ["Pierre", "Paul", "Jacques"];
console.log(tableauChaines);


  let n = 2;  //declaration + affectation 
n = 3;    //affectation
console.log(n);

// on utilise const pour pas changer la valeur declarée du variable

const a = 5
var truc = "truc"
console.log(a);
console.log(truc);

if (true) {
    var tata = "tata"
}
console.log(tata);

if (true) {
    let toto = "toto" //la variable toto n'est accessible que dans le bloc if 
}
console.log(toto);
//console.log(toto)
console.log(typeof Number); //number
console.log(typeof message); //string
console.log(typeof VraiFaux); //boolean
console.log(typeof TableauEntiers); //object

let trac;
console.log(typeof trac); //undefined

