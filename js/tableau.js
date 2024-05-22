const tab = ["pierre", "paul", "jack"];
console.log(tab, typeof tab);
console.log(tab[1]); //pour index l'element 1 du tableau 
console.log("tout va bien");

const fruits = ["banane", "pasteque", "mango", "pomme"];
console.log(fruits);
fruits.pop ("mango");
console.log(fruits);
fruits.push ("coco");

const filles = ["Eva", "coco"];
const gens = filles.concat (tab)
console.log(tab. toString());

const slicedfruits = fruits.slice(2) // supprimer plusieurs
console.log(slicedfruits);

fruits.splice(1, 0, "kiwi"); // ajouter un truc dans le tableau
console.log(fruits);
