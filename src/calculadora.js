class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    //divisao por 0
    if (b === 0) {
        throw new Error ("Divisão por 0 (zero) não é permitida")     
    }
    return a / b;
  }
}
module.exports = Calculadora;