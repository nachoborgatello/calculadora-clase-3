/**
 * 
 * @param {number} numero1 
 * @param {number} numero2 
 * @returns 
 */

 const dividir = (numero1, numero2) => {
    if(numero1 === 0 || numero2 === 0){
        return ("No se puede dividir por cero.");
    }
    else{
        const resultado = numero1 / numero2;
        return resultado;
    }
};

//Exportamos el modulo
module.exports = dividir;