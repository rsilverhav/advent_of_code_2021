function findMostCommonBit(binaryStrings: string[], binaryIndex: number): number {
  let nrOfOnes = 0
  for (const binaryString of binaryStrings) {
    if (binaryString[binaryIndex] === '1') {
      nrOfOnes++
    }
  }
  return nrOfOnes >= binaryStrings.length - nrOfOnes ? 1 : 0
}

export function getGammaEpsilon(binaryStrings: string[]): number {
  let gamma = 0
  let epsilon = 0

  const nrOfBits = binaryStrings[0].length
  for (let binaryIndex = 0; binaryIndex < nrOfBits; binaryIndex++) {
    const mostCommonBit = findMostCommonBit(binaryStrings, binaryIndex)
    gamma += mostCommonBit << (nrOfBits - binaryIndex - 1)
    epsilon += (1 - mostCommonBit) << (nrOfBits - binaryIndex - 1)
  }

  return gamma * epsilon
}

export function getFilteredValue(
  binaryStrings: string[],
  filter: (mostCommonBit: number, value: number) => boolean
): number {
  let currentBinaryStrings = [...binaryStrings]

  const nrOfBits = binaryStrings[0].length
  let binaryIndex = 0
  while (currentBinaryStrings.length > 1 && binaryIndex < nrOfBits) {
    const mostCommonBit = findMostCommonBit(currentBinaryStrings, binaryIndex)
    currentBinaryStrings = currentBinaryStrings.filter((str) =>
      filter(mostCommonBit, Number(str[binaryIndex]))
    )

    binaryIndex++
  }

  if (currentBinaryStrings.length !== 1) {
    throw new Error(`Unexpected nr of binary strings left: ${currentBinaryStrings.length}`)
  }

  return parseInt(currentBinaryStrings[0], 2)
}

export function getOxygenCO2(binaryStrings: string[]): number {
  const oxygen = getFilteredValue(binaryStrings, (mostCommonBit, value) => value === mostCommonBit)
  const co2 = getFilteredValue(binaryStrings, (mostCommonBit, value) => value !== mostCommonBit)

  return oxygen * co2
}
