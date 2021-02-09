/*Exercici 1
- Crea un array amb el teu nom on cada posició correspongui a una lletra.
- Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres
*/
const fullName = "Ismael Nieto Martinez";
let arrayName = fullName.split("")

for (let letter of arrayName){
    console.log(letter);
}

/* Exercici 2
- Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. 
Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
-Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número:__’
*/

const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
const numbers = ["1", "2", "3", "4", "5","6","7", "8", "9", "0"]

for (let letter of arrayName){
    if(vowels.includes(letter)) {
        console.log(`He trobat la VOCAL: ${letter}`);
    } else if(numbers.includes(letter)){
            console.log(`Els noms de persones no contenen el número: ${letter}`);
    } else {
        console.log(`He trobat la CONSONTANT: ${letter}`);
    }
}
/*Exercici 3
Emmagatzemar en un Map les lletres de l'array y el nombre de vegades que apareixen.
*/

function mappingArray(m, arr){
    for (let a of arr){
        if (m.has(a)){
            m.set(a, m.get(a)+1)
            console.log(a)
        } else {
            m.set(a, 1);
            console.log(a)
        }
    }
    return m;
}
let map = new Map;
let newMap = mappingArray(map, arrayName);

/*

Exercici 4
-Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
- Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera 
i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.
*/


    
