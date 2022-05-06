import { swapItem } from "./utils";

export const insertionSort = (
  array: number[],
  sortedIndex: number = 0,
  currIndex: number = 0
): void => {
  if (sortedIndex === array.length) {
    return;
  }

  if (currIndex === 0 || array[currIndex] >= array[currIndex - 1]) {
    return insertionSort(array, sortedIndex + 1, sortedIndex + 1);
  }

  swapItem(array, currIndex, currIndex - 1);
  return insertionSort(array, sortedIndex, currIndex - 1);
};
