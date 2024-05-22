const maChaine = "I love coding !";
console.log(maChaine, typeof maChaine);

const withJs = "with Javascript."

let message = maChaine + withJs; //concatenation addition de 2 chaines de caractère
console.log(message, typeof message);

const year = 2024;
message = message + "since" +year;
console.log(message, typeof message);

const prenom = "toto ";
const age = 10;
const message2 = "je m'appelle " + prenom + "et j'ai" + age + "ans.";
console.log(message2);
const message3 = `je m'appelle ${prenom} et j'ai ${age}`; //template string à utiliser par defaut
console.log(message3, typeof message3);

let texte = "hello world, welcome to the universe.";
let result = texte.indexOf("welcome"); //indexof est une methode

const text = "How are u doing today ?";
const myArray = text.split(" "); // text.split decoupe le texte
console.log(myArray, typeof myArray);
console.log(text.length);

const visit = "visit Microsoft";
const visitReplace = visit.replace("Microsoft", "W3School");  // on utilise visitreplace pour remplacer un mot
console.log(visitReplace);

console.log(visit.toUpperCase ());
console.log(visit [6]); //pour trouver la 6éme lettre de la phrase