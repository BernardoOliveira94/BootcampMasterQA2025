var assert = require("assert");
const Calculadora = require("../src/calculadora");

describe("Soma Simples", function () {
  it("Testes de soma", function () {
    let minhaCalculadora;
    minhaCalculadora = new Calculadora();
    assert.equal(minhaCalculadora.somar(2 + 3), 5);
  });
});
