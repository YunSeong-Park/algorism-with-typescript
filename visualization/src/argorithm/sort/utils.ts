export function swapItem(array: number[], i: number, j: number): void {
  if (i === j) {
    return;
  }
  array[i] ^= array[j];
  array[j] ^= array[i];
  array[i] ^= array[j];
}
