// First solution, not used
export function getNrOfIncrease(depthValues: number[]): number {
  return depthValues.reduce<{ sum: number; prev: number }>(
    (sumData, next) => ({ sum: sumData.sum + (next > sumData.prev ? 1 : 0), prev: next }),
    { sum: 0, prev: Number.MAX_SAFE_INTEGER }
  ).sum
}

export function getNrOfIncreaseSum({
  depthValues,
  nrInSum,
}: {
  depthValues: number[]
  nrInSum: number
}): number {
  let totalIncrease = 0

  let prevSum = Number.MAX_SAFE_INTEGER
  for (let index = 0; index <= depthValues.length + nrInSum; index++) {
    let currSum = 0
    for (let sumOffset = 0; sumOffset < nrInSum; sumOffset++) {
      currSum += depthValues[index + sumOffset]
    }
    if (currSum > prevSum) {
      totalIncrease += 1
    }
    prevSum = currSum
  }

  return totalIncrease
}
