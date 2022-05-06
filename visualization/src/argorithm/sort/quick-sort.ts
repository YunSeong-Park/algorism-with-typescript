import { swapItem } from "./utils";

export const quickSort = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
): void => {
  if (left >= right) {
    return;
  }

  let pointer = left;

  for (let i = 0; i < right - left; i++) {
    if (array[left + i] < array[right]) {
      swapItem(array, pointer, left + i);
      pointer++;
    }
  }

  swapItem(array, pointer, right);

  quickSort(array, left, pointer - 1);
  quickSort(array, pointer + 1, right);
};
