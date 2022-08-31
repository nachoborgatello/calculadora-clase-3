const sumar = require("./Funciones/Sumar.js")
const restar = require("./Funciones/Restar.js")
const multiplicar = require("./Funciones/Multiplicar.js")
const dividir = require("./Funciones/Dividir.js")

const accion = process.argv[2];

const num1 = parseInt(process.argv[3]);
const num2 = parseInt(process.argv[4]);

if(!accion || !num1 || !num2) return;

switch (accion){
    case "sumar":{
        const resultado = sumar(num1, num2);
        console.log(resultado);
        break;
    }
    case "restar":{
        const resultado = restar(num1, num2);
        console.log(resultado);
        break;
    }
    case "multiplicar":{
        const resultado = multiplicar(num1, num2);
        console.log(resultado);
        break;
    }        
    case "dividir":{
        const resultado = dividir(num1, num2);
        console.log(resultado);
        break;
    }
    default:{
        console.log("Error: Invalid accion");
        break;
    }
}