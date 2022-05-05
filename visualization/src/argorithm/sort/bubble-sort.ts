import { swapItem } from "./utils";

export const bubbleSort = (
  array: number[],
  sortedIndex: number = array.length - 1,
  currIndex: number = 0
): void => {
  if (sortedIndex === 0) {
    return;
  }

  if (currIndex === sortedIndex) {
    return bubbleSort(array, sortedIndex - 1);
  }

  if (array[currIndex] > array[currIndex + 1]) {
    swapItem(array, currIndex, currIndex + 1);
  }

  return bubbleSort(array, sortedIndex, currIndex + 1);
};

export const bubbleSortByFor = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swapItem(array, j, j + 1);
      }
    }
  }
};
