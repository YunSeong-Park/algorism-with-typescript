import { swapItem } from "./utils";

export const quickSort = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
): void => {
  if (left >= right) {
    return;
  }

  const pivotPosition = partition(array, left, right);

  quickSort(array, left, pivotPosition - 1);
  quickSort(array, pivotPosition + 1, right);
};

export const quickSortTailRecursion = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) => {
  while (left < right) {
    const pivotPosition = partition(array, left, right);

    if (pivotPosition - left < right - pivotPosition) {
      quickSortTailRecursion(array, left, pivotPosition - 1);
      left = pivotPosition + 1;
    } else {
      quickSortTailRecursion(array, pivotPosition + 1, right);
      right = pivotPosition - 1;
    }
  }
};

const partition = (array: number[], left: number, right: number) => {
  let pivotPosition = left;

  for (let i = 0; i < right - left; i++) {
    if (array[left + i] < array[right]) {
      swapItem(array, pivotPosition, left + i);
      pivotPosition++;
    }
  }

  swapItem(array, pivotPosition, right);

  return pivotPosition;
};
