import { res, sum } from "../sum";

test("sum of two number calculation", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
