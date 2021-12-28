function costWithoutIncrease(current: number, align: number) {
  return Math.abs(current - align)
}

function costWithIncrease(current: number, align: number) {
  const n = Math.abs(current - align)
  return (n * (n + 1)) / 2
}

export function findShortestAlign(horizontalPositions: number[], increasedFuelCost: boolean) {
  const sortedHorizontalPositions = horizontalPositions.sort((a, b) => (a < b ? -1 : 1))
  const min = sortedHorizontalPositions[0]
  const max = sortedHorizontalPositions[sortedHorizontalPositions.length - 1]

  const minInfo = {
    cost: Number.MAX_SAFE_INTEGER,
    alignTo: -1,
  }

  for (let currentAlign = min; currentAlign <= max; currentAlign++) {
    const totalCost = sortedHorizontalPositions.reduce(
      (sum, next) =>
        sum + (increasedFuelCost ? costWithIncrease : costWithoutIncrease)(next, currentAlign),
      0
    )

    if (totalCost < minInfo.cost) {
      minInfo.cost = totalCost
      minInfo.alignTo = currentAlign
    }
  }

  if (minInfo.alignTo === -1) {
    throw new Error('Never tested any alignments')
  }

  return minInfo.cost
}
