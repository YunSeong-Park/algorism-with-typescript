import { fib, loopFib, tailCallFib } from "./fibonacci";

function fibequation(n: number) {
  return (
    ((Math.pow((1 + Math.sqrt(5)) / 2, n) -
      Math.pow((1 - Math.sqrt(5)) / 2, n)) /
      Math.sqrt(5)) |
    0
  );
}

describe("fibonacci", () => {
  const testFibonacci = (fibFunc: (n: number) => number) => () => {
    test("음수는 0으로 반환", () => {
      expect(fibFunc(-100)).toBe(0);
    });

    test("0 = 0", () => {
      expect(fibFunc(0)).toBe(0);
    });

    test("1 = 1", () => {
      expect(fibFunc(1)).toBe(1);
    });

    test("10, 20", () => {
      expect(fibFunc(10)).toBe(fibequation(10));

      expect(fibFunc(20)).toBe(fibequation(20));
    });
  };

  describe("basic function", testFibonacci(fib));

  describe("tail call function", testFibonacci(tailCallFib));

  describe("loop function", testFibonacci(loopFib));
});
