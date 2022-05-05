import { swapItem } from "./utils";

export const selectionSort = (
  array: number[], //
  sortedIndex: number = 0
): void => {
  if (sortedIndex === array.length - 1) {
    return;
  }
  const minIndex = findMinIndex(array.slice(sortedIndex)) + sortedIndex;

  console.log(minIndex);

  if (minIndex !== sortedIndex) {
    swapItem(array, minIndex, sortedIndex);
  }

  return selectionSort(array, sortedIndex + 1);
};

const findMinIndex = (array: number[]) => {
  const { index } = array.reduce(
    (acc, curr, index) => {
      if (acc.min > curr) {
        acc.min = curr;
        acc.index = index;
      }
      return acc;
    },
    { min: Number.MAX_SAFE_INTEGER, index: 0 }
  );

  return index;
};
