import { testDeSuma, testString, testObject } from "../js/app";

describe("Practica para pruebas sanitarias", () => {
  it("test esperar un valor especifico", () => {
    expect(testDeSuma(1, 1)).toBe(2);
  });

  it("test esperar un valor especifico", () => {
    resultado = suma(1, 1);
    expect(Number.isInteger(resultado)).toBe(true);

    resultadoString = testString("es string");
    expect(typeof resultadoString === "string").toBe(true);
  });

  it("validacion de objetos", () => {
    user = testObject();
    expect(user).toHaveProperty("name");
    expect(typeof user.name).toBe("string");
  });
});
