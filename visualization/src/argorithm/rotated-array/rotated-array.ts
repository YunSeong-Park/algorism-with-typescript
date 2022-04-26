export function indexOfRotatedArray(
  array: number[],
  num: number,
  start: number,
  end: number
): number {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);

  if (array[mid] === num) {
    return mid;
  }

  if (array[start] <= array[mid]) {
    if (num >= array[start] && num < array[mid]) {
      return indexOfRotatedArray(array, num, start, mid - 1);
    }

    return indexOfRotatedArray(array, num, mid + 1, end);
  }

  if (num > array[mid] && num <= array[end]) {
    return indexOfRotatedArray(array, num, mid + 1, end);
  }

  return indexOfRotatedArray(array, num, start, mid - 1);
}
