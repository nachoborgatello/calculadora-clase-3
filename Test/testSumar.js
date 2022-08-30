const sumar = require("../Funciones/Sumar.js");

const num1 = 1; 
const num2 = 2; 
//Guardamos el retorno de la variable en una constante
//para luego utilizarlo en otro lado.
const resultado = sumar(num1,num2);

console.log("Suma entre ", num1, " y ", num2);
console.log(resultado);