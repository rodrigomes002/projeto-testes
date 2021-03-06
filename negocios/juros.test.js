const juros = require("./juros");
const expect = require("chai").expect;

describe("Modulo juros", () => {
  it("calcula juros compostos", () => {
    const resultado1010 = juros.calculoJuros(1000, 0.01, 1);
    expect(resultado1010).to.equal(1010);

    const resultado1020 = juros.calculoJuros(1000, 0.02, 1);
    expect(resultado1020).to.equal(1020);
  });
});
