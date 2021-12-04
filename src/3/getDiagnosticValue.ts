function findMostCommonBit(binaryStrings: string[], binaryIndex: number): number {
  let nrOfOnes = 0
  for (const binaryString of binaryStrings) {
    if (binaryString[binaryIndex] === '1') {
      nrOfOnes++
    }
  }
  return nrOfOnes > binaryStrings.length - nrOfOnes ? 1 : 0
}

export function getDiagnosticValue(binaryStrings: string[]): number {
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
