export function getNrOfIncrease(depthValues: number[]): number {
  return depthValues.reduce<{ sum: number; prev: number }>(
    (sumData, next) => ({ sum: sumData.sum + (next > sumData.prev ? 1 : 0), prev: next }),
    { sum: 0, prev: Number.MAX_SAFE_INTEGER }
  ).sum
}
