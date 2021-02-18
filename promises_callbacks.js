/*
Nivell 1
- Exercici 1
Crear una function que retorni una Promise que invoqui la funcion resolve() 
o bé reject() que rep. Invocar-la des de fora pasandole totes dues funcions que imprimeixin
 un missatge diferent en cada cas.
*/

const promise = new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 5); // Return interger between 0 and 5
        if(randomNumber > 2){
            resolve("success");
        } else {
            reject("error");
        }
    });


promise.then(()=> console.log("mas de 2"))
       .catch(()=> console.log("menos de 2"))