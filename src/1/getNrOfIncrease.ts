export function getNrOfIncrease({
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
