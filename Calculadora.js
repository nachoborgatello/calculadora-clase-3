//5- Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos
//hechos con anterioridad.

const sumar = require("./Funciones/Sumar.js")
const restar = require("./Funciones/Restar.js")
const multiplicar = require("./Funciones/Multiplicar.js")
const dividir = require("./Funciones/Dividir.js")

var num1 = 7;
var num2 = 4;

//6- Ejecutar la función que permite sumar y la función que permite restar, pasando como
//argumentos dos números cualesquiera. Mostrar en consola los resultados.

const suma1 = sumar(num1,num2);
console.log("Resultado de la suma de ", num1, " y " , num2, " es ", suma1);
const resta1 = restar(num1,num2);
console.log("Resultado de la resta de ", num1, " y " , num2, " es ", resta1);

var mul1 = 10;
var mul2 = 3;

//7- Ejecutar la función que permite multiplicar, pasando como argumentos dos números
//cualesquiera. Mostrar en consola el resultado.

//8- Ejecutar la función que permite multiplicar, pasando ahora como uno de los dos
//argumentos, el número cero. Mostrar en consola el resultado.

const multi1 = multiplicar(mul1,mul2);
console.log("Resultado de la multiplicación entre ", mul1, " y " , mul2, " es ", multi1);
const multi0 = multiplicar(mul1,0);
console.log("Resultado de la multiplicación entre ", mul1, " y " , 0, " es ", multi0);

var div1 = 60;
var div2 = 6;

//9- Ejecutar la función que permite dividir, pasando como argumentos dos números
//cualesquiera. Mostrar en consola el resultado.

//10- Ejecutar la función que permite dividir, pasando ahora como uno de los dos
//argumentos, el número cero. Mostrar en consola el resultado.

const divi1 = dividir(div1,div2);
console.log("Resultado de la división entre ", div1, " y " , div2, " es ", divi1);
const divi0 = dividir(div1,0);
console.log("Resultado de la división entre ", div1, " y " , 0, " es ", divi0);
