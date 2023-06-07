
const prompt = require("prompt-sync")();


//REPASO VANILLA III EJERCICIOS

//CONDICIONALES ....

// 10. Crea un programa en el que el usuario introduzca el número del mes (del 1 al 12) y el
// código responda cuántos días tiene ese mes.

// const mes = parseInt(prompt("Dime el número del mes"));

// switch(mes){

//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("Este mes tiene 31 días")
//     break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Este mes tiene 30 días");
//     break;

//     case 2:
//         console.log("Este mes tiene 28 días");
//     break;

//     default:
//         console.log("En que mes vives tu?")
// }


//////////////////////////////////////////////

// 12. Crea un programa en que se definan variables para el precio por kilómetro, el vehículo y
// los kilómetros recorridos. El vehículo y los kilómetros recorridos deben ser proporcionados
// por el usuario. A continuación, el programa debe realizar los cálculos para obtener el total a
// pagar, teniendo en cuenta las siguientes consideraciones: si el vehículo es “coche”, el precio
// por kilómetro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús”, 0.5.

// const vehiculo = prompt("Dime de que tipo de vehículo se trata");

// const km = parseInt(prompt("Dime ahora en este caso los kilómetros"));

// let precio = 0;
// let total = 0;

// switch(vehiculo.toLowerCase()){

//     case "coche":
//         precio = 0.10;
//     break;

//     case "moto": 
//         precio = 0.20;
//     break;

//     case "autobus":
//     case "autobús":
//         precio = 0.50;
//     break;

//     default:
//         console.log("Estás loco! no existe ese vehículo");
// }

// total = precio * km;

// console.log(`El total a pagar es ${total}`);


// 10. Pide al usuario cinco números, almacénalos en un array y muestra por consola el
// resultado de cada uno de ellos multiplicado por 3. Muestra también un array que contenga
// todos los resultados.

// let arrayNumeros = [];

// for(let i = 0; i < 5; i++){
//     arrayNumeros.push(parseInt(prompt("Dime un número")) * 3);
// }

// console.log(arrayNumeros)


// 10. Crea una función que, dado un array de números, devuelva la suma de todos los
// números que contiene.

// const arrayDavid = [1,2,3,4,7];

// const Suma = (arrayDavid) =>  {

//     let sumaTotal = 0;

//     for(let numero of arrayDavid){
//         sumaTotal += numero;
//     }

//     return sumaTotal;
// }

// let res = Suma(arrayDavid);

// console.log(res);
