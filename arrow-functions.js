/*
- Exercici 1
- Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.
*/

(() => { console.log(2 + 3) })();

/* 
Nivell 2
- Exercici 1
    Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
*/

const retunrObj = (word)=>  newObjt = {greetings: word};
console.log(retunrObj("Good Morning"))
/*
Exercici 2
- Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat.
    La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. 
    Invocar el mètode decirNombre des de fora de la classe.
*/

class Person{
    constructor(name){
        this.name = name;
    }
    get decirNombre(){
        console.log(this.name);
    }
}
let persona = new Person("Julio Iglesias");
persona.decirNombre;

/* Nivell 3
    - Exercici 1
    Crear una function creadora d'objectes, abstraient la definició de les classes. Invocar-amb diferents definicions.
*/
