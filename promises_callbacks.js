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
        if (randomNumber > 5) {
            resolve();
        } else {
            reject();
        }
    });
};

promise()
    .then(() => console.log("You pass the exercise."))
    .catch(() => console.log("Ups, you should try the exercise again"))

/* - Exercici 2
    Crear una arrow function que, rebent un paràmetre i una function callback, 
    li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.
 */

const myCallBack = function (n) {
    total = (n + 4);
    console.log(`el resultado es ${total}`);
}

const myArrowFunction = (x, callback) => callback(x)

myArrowFunction(11, myCallBack);

/*Nivell 2
- Exercici 1
    Donats els objectes employees i salaries, creu una arrow function getEmpleado 
    que retorni una Promise efectuant la cerca en l'objecte pel seu id.
 */

let employees = [
    { id: 1, name: 'Linux Torvalds' },
    { id: 2, name: 'Bill Gates' },
    { id: 3, name: 'Jeff Bezos' }
];

const getEmpleado = (numberID) => {
    return new Promise((resolve, reject) => {
        let isEmpleado = employees.find(x => x.id === numberID)
        if (isEmpleado) {
            resolve(isEmpleado);
        } else {
            reject();
        }
    });
}

let empleadoID = 2
getEmpleado(empleadoID)
    .then(() => console.log("Employee works here"))
    .catch(() => console.log("Ups, no employee here!")) 


/*Exercici 2
Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.
*/
let salaries = [
    { id: 1, salary: 4000 },
    { id: 2, salary: 1000 },
    { id: 3, salary: 2000 }
];

const getSalario = (obj) => {

    return new Promise(function(resolve, reject) {
            let isSalary = salaries.find(x => x.id === obj.id);
            if (isSalary.id) {
                resolve(isSalary.salary);
            } else {
                reject();
            }
        });
}
    
getSalario(employees[2])
    .then((salary) => console.log(`Employee has that salary: ${salary}`))
    .catch(() => console.log("Ups. No employee found"))

