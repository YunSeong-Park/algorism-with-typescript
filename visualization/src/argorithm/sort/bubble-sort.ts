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
    changeItem(array, currIndex, currIndex + 1);
  }

  return bubbleSort(array, sortedIndex, currIndex + 1);
};

function changeItem(array: number[], i: number, j: number): void {
  array[i] ^= array[j];
  array[j] ^= array[i];
  array[i] ^= array[j];
}
