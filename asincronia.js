/* Nivell 1
- Exercici 1
    Donats els objectes Employees i Salaries, creu una arrow function getEmpleado que retorni
    una Promise efectuant la cerca en l'objecte pel seu id. Creu una altra arrow function getSalario que 
    rebi com a paràmetre un objecte Employee i retorni el seu salari. 
 */

let employees = [
    { id: 1, name: 'Linux Torvalds' },
    { id: 2, name: 'Bill Gates' },
    { id: 3, name: 'Jeff Bezos' }
];

let salaries = [
    { id: 1, salary: 4000 },
    { id: 2, salary: 1000 },
    { id: 3, salary: 2000 }
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
    
let empleado = 1;

getEmpleado(empleado)
    .then((w) => getSalario(w))
    .catch(() => console.log("No Id and no salary found"))