/* Nivell 1. 
-Exercici 1: Crear una funció que imprimeixi en consola el nom d'usuari sent invocada externament i passant el nom com a paràmetre.
*/

function userName(word){
    console.log(word);
}

let nombre = "Ismael"
userName(prompt("Introduzca su nombre: "));


/* Nivell 2
- Exercici 1: Imprimir el nom i cognoms de l'usuari en variables mitjançant template literals, creant les variables i referenciant en la impressió de l'missatge
*/
function userName(firstName, lastname){
    console.log(`Mi nombre es ${firstName} y mi apellido es ${lastname}`);
}

let nombre = prompt("Introduzca su nombre: ").split(" ")

userName(nombre[0], nombre[1]);

/* Exercici 2
- Invocar la funció mitjançant template literals
*/
function userName(){
    return prompt();
}
console.log(`Mi nombre es ${userName()} y mi apellido es ${userName()}`);
/* Nivell 3
- Exercici 1
 Crea una matriu de deu funcions i empleni-la mitjançant un bucle. Cada funció comptarà del 0-9 imprimint-ho per pantalla. 
 Invoqui cada funció de  l'array iterativament. Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades. 
 */
const print_numbers = function (n) {
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
    return;
}
const numFunctions = 10;
const arr = Array(numFunctions);
for (let i = 0; i<= numFunctions; i++) {
    arr[i] = print_numbers(numFunctions);
}

/*
- Exercici 2
Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi per pantalla el nom d'usuari rebut com a paràmetre
*/
const newVariable = (function UserName(user){
    console.log(user)
})(prompt("Introduzca su nombre: "))   
        
    