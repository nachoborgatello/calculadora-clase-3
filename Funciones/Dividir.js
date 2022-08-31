/**
 *
 * @param {number} numero1
 * @param {number} numero2
 * @returns
 */

const dividir = (numerador, denominador) => {
  if (denominador === 0) {
    return "No se puede dividir por cero.";
  } else {
    const resultado = numerador / denominador;
    return resultado;
  }
};

//Exportamos el modulo
module.exports = dividir;
