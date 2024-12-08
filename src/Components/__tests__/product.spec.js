import { Product } from "../Product";

test("product of two numbers calculation", () => {
  const result = Product(2, 3);

  // Assertion
  expect(result).toBe(6);
});
