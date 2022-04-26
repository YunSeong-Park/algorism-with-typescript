import { indexOfRotatedArray } from "./rotated-array";

const array = [20, 25, 26, 29, 33, 1, 3, 5, 6, 10, 11, 19];
const lastIndex = array.length - 1;

describe("RotatedArray", () => {
  it("포함하지 않은 값이 들어오면 -1을 반환한다.", () => {
    const result = indexOfRotatedArray(array, 50, 0, lastIndex);
    expect(result).toBe(-1);
  });

  it("첫번째 인자를 찾음", () => {
    const result = indexOfRotatedArray(array, array[0], 0, lastIndex);
    expect(result).toBe(0);
  });

  it("마지막 인자를 찾음", () => {
    const result = indexOfRotatedArray(array, array[lastIndex], 0, lastIndex);
    expect(result).toBe(lastIndex);
  });

  it("격차의 왼쪽 값을 찾음", () => {
    const result = indexOfRotatedArray(array, array[3], 0, lastIndex);
    expect(result).toBe(3);
  });

  it("격차의 오른쪽 값을 찾음", () => {
    const result = indexOfRotatedArray(
      array,
      array[lastIndex - 2],
      0,
      lastIndex
    );
    expect(result).toBe(lastIndex - 2);
  });
});
