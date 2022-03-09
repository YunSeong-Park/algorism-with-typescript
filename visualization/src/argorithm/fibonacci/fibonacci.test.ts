import { fib } from "./fibonacci";

function fibequation(n: number) {
  return (
    ((Math.pow((1 + Math.sqrt(5)) / 2, n) -
      Math.pow((1 - Math.sqrt(5)) / 2, n)) /
      Math.sqrt(5)) |
    0
  );
}

describe("fibonacci", () => {
  describe("basic function", () => {
    test("음수는 0으로 반환", () => {
      expect(fib(-100)).toBe(0);
    });

    test("0 = 0", () => {
      expect(fib(0)).toBe(0);
    });

    test("1 = 1", () => {
      expect(fib(1)).toBe(1);
    });

    test("10, 20", () => {
      expect(fib(10)).toBe(fibequation(10));

      expect(fib(20)).toBe(fibequation(20));
    });
  });
});
