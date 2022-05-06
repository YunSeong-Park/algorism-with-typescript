import { quickSort } from "./quick-sort";
import { selectionSort } from "./selection-sort";
import { bubbleSort, bubbleSortByFor } from "./bubble-sort";
import { insertionSort } from "./insertion-sort";

const array = [10, 3, 4, 6, 3, 1, 19, 19, 29, 10, 20];

const getSortedArray = () => {
  const result = Array.from(array);
  result.sort((a, b) => a - b);
  return result;
};

describe("sort", () => {
  let array1: number[] = [];
  beforeEach(() => {
    array1 = [...array];
  });

  it("bubble sort", () => {
    bubbleSort(array1);
    expect(array1).toEqual(getSortedArray());
  });

  it("bubble sort by for", () => {
    bubbleSortByFor(array1);
    expect(array1).toEqual(getSortedArray());
  });

  it("selecttion sort", () => {
    selectionSort(array1);
    expect(array1).toEqual(getSortedArray());
  });

  it("insertion sort", () => {
    insertionSort(array1);
    expect(array1).toEqual(getSortedArray());
  });

  it("quick sort", () => {
    quickSort(array1);
    expect(array1).toEqual(getSortedArray());
  });
});
