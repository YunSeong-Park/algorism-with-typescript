import { moveTower } from "./tower-of-hanoi";

describe("moveTower", () => {
  describe("throw Error", () => {
    it("when start/end are equal", () => {
      expect(() => moveTower(1, 1, 1)).toThrow();
    });

    it("when height is less than 1", () => {
      expect(() => moveTower(0, 0, 1)).toThrow();
    });
  });

  it("one height", () => {
    const actions = moveTower(1, 0, 1);
    expect(actions.length).toBe(1);
    expect(actions[0]).toEqual({ toPillar: 1, disk: 1, fromPillar: 0 });
  });

  it("every disk cannot be on a disk smaller than itself", () => {
    const height = 10;
    const actions = moveTower(height, 0, 1);
    const pillars: number[][] = [
      new Array(height).fill(null).map((n, i) => height - i),
      [],
      [],
    ];

    actions.forEach((action) => {
      const disk = pillars[action.fromPillar].pop();
      expect(disk).toBe(action.disk);

      const targetPillar = pillars[action.toPillar];
      if (targetPillar.length > 0) {
        expect(targetPillar[targetPillar.length - 1] > disk!).toBeTruthy();
      }

      pillars[action.toPillar].push(disk!);
    });
  });
});
