/*
Nivell 1
- Exercici 1
Crear una function que retorni una Promise que invoqui la funcion resolve() 
o bé reject() que rep. Invocar-la des de fora pasandole totes dues funcions que imprimeixin
 un missatge diferent en cada cas.
*/

const promise = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 11); // Return interger between 0 and 5
        if(randomNumber > 5){
            resolve();
        } else {
            reject();
        }
    });
};

promise().then(()=> console.log("You pass the exercise."))
         .catch(()=> console.log("Ups, you should try the exercise again"))
/* - Exercici 2
Crear una arrow function que, rebent un paràmetre i una function callback, 
li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.
 */

const myCallBack = function(n){
    total = (n  + 4 );
    console.log(`el resultado es ${total}`);
}

const myArrowFunction = (x, callback)=> callback(x)

myArrowFunction(11, myCallBack);