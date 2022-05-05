import { selectionSort } from "./selection-sort";
import { bubbleSort, bubbleSortByFor } from "./bubble-sort";

describe("bubble sort", () => {
  let array1: number[] = [];
  beforeEach(() => {
    array1 = [1, 0, 4, 21, 100000];
  });
  it("sort number array", () => {
    bubbleSort(array1);
    expect(array1).toEqual([0, 1, 4, 21, 100000]);
  });
});

describe("bubble sort by for", () => {
  let array1: number[] = [];
  beforeEach(() => {
    array1 = [1, 0, 4, 21, 100000];
  });
  it("sort number array", () => {
    bubbleSortByFor(array1);
    expect(array1).toEqual([0, 1, 4, 21, 100000]);
  });
});

describe("selecttion sort", () => {
  let array1: number[] = [];
  beforeEach(() => {
    array1 = [1, 0, 4, 21, 100000];
  });
  it("sort number array", () => {
    selectionSort(array1);
    expect(array1).toEqual([0, 1, 4, 21, 100000]);
  });
});
