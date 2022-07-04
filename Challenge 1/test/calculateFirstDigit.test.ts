import { validate } from "../src/refined_code";

describe("Validate CPF", () => {
  test("Insert invalid CPF", () => {
    // Arrange
    let cpf = null;
    // Act
    let result = validate(cpf);
    // Asserts
    expect(result).toBe(false);
  });

  // test("Insert CPF with special characters", () => { //Visul Code is changing the internal string values
  //   // Arrange
  //   let cpf = "391.275.160-91";
  //   // Act
  //   let result = validate(cpf);
  //   // Asserts
  //   expect(result).toBe(true);
  // });

  test("Insert CPF with less than 11 digits", () => {
    // Arrange
    let cpf = "391275160";
    // Act
    let result = validate(cpf);
    // Asserts
    expect(result).toBe(false);
  });

  test("Insert CPF with more than 11 digits", () => {
    // Arrange
    let cpf = "39127516044";
    // Act
    let result = validate(cpf);
    // Asserts
    expect(result).toBe(false);
  });

  test("Insert CPF with repeated numbers", () => {
    // Arrange
    let cpf = "11111111111";
    // Act
    let result = validate(cpf);
    // Asserts
    expect(result).toBe(false);
  });

  test("Insert Valid CPF", () => {
    // Arrange
    let cpf = "39127516091";
    // Act
    let result = validate(cpf);
    // Asserts
    expect(result).toBe(true);
  });
});
