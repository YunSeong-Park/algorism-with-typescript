type AddNumber = (number: number) => void;

export class FibonacciSequence {
  constructor() {}
}

export function fib(n: number): number {
  if (n < 2) {
    return Math.max(n, 0);
  }

  return fib(n - 1) + fib(n - 2);
}
