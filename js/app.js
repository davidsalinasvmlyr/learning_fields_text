function testDeSuma(a, b) {
  try {
    return a + b;
  } catch (e) {
    throw new Error("el error es: " + e);
  }
}

function testString(texto) {
  try {
    return texto;
  } catch (e) {
    throw new Error("el error es: " + e);
  }
}

function testObject() {
  try {
    return {
      name: "user test1",
      age: 18,
      email: "usertest@gmail.com",
    };
  } catch (e) {
    throw new Error("el error es: " + e);
  }
}

export { testDeSuma, testString, testObject };
