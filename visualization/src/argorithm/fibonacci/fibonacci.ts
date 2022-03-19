export function fib(n: number): number {
  if (n < 2) {
    return Math.max(n, 0);
  }

  return fib(n - 1) + fib(n - 2);
}

export function tailCallFib(
  n: number,
  prev: number = 1,
  twoPrev: number = 0
): number {
  if (n < 1) {
    return twoPrev;
  }

  if (n === 1) {
    return prev;
  }

  const curr = prev + twoPrev;

  twoPrev = prev;
  prev = curr;

  return tailCallFib(n - 1, prev, twoPrev);
}

export function loopFib(n: number) {
  if (n < 2) {
    return Math.max(n, 0);
  }

  let result = 0;
  let prev = 1;
  let twoPrev = 0;

  for (let i = 1; i < n; i++) {
    result = prev + twoPrev;
    twoPrev = prev;
    prev = result;
  }

  return result;
}
