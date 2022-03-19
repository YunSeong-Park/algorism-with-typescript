type Pillar = 0 | 1 | 2;
type Action = { disk: number; toPillar: Pillar };

type MoveTower = (
  height: number,
  startPillar: Pillar,
  endPillar: Pillar
) => Action[];

export const moveTower: MoveTower = (height, startPillar, endPillar) => {
  if (startPillar === endPillar) {
    throw Error("시작 기둥과 목표 기둥이 동일합니다.");
  }

  return moveTowerRecurrcive(height, startPillar, endPillar);
};

const moveTowerRecurrcive: MoveTower = (height, startPillar, endPillar) => {
  if (height === 1) {
    return [{ disk: 1, toPillar: endPillar }];
  }

  const middlePillar = findMiddlePillar(startPillar, endPillar);

  const result: Action[] = [];

  result.push(...moveTowerRecurrcive(height - 1, startPillar, middlePillar));
  result.push({ disk: height, toPillar: endPillar });
  result.push(...moveTowerRecurrcive(height - 1, middlePillar, endPillar));

  return result;
};

const findMiddlePillar = (start: Pillar, end: Pillar): Pillar => {
  return (3 - (start + end)) as Pillar;
};
