/* Exercici 1
    - Crea un array amb el teu nom on cada posició correspongui a una lletra.
    - Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres
*/
const firstName = "Ismael Nieto Martinez";
let arrayName = firstName.split("")

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

/* Exercici 3
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

/* Exercici 4
-Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
- Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera 
i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà firstName.
*/
const familyName = ["N", "i", "e", "t", "o"]
const firstName = arrayName.concat(" ", familyName)

    
/* Nivell 22 
    Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:
*/
var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 
//const regExpres = '/[a-zñ0-9.-]*@[a-zñ0-9.-]*.[a-zA-Z]{2,3}/g';

function return_emails(txt){

    let result = str.match(/[a-zñ0-9.-]*@[a-zñ0-9.-]*.[a-zA-Z]{2,3}/g) || [];

    return result;

}

return_emails(str)