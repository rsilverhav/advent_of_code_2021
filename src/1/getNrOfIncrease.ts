export function getNrOfIncrease({
  depthValues,
  nrInSum,
}: {
  depthValues: number[]
  nrInSum: number
}): number {
  let totalIncrease = 0

  let prevSum = Number.MAX_SAFE_INTEGER
  for (let index = 0; index <= depthValues.length - nrInSum; index++) {
    const currSum = depthValues.slice(index, index + nrInSum).reduce((sum, i) => sum + i, 0)
    if (currSum > prevSum) {
      totalIncrease += 1
    }
    prevSum = currSum
  }

  return totalIncrease
}
