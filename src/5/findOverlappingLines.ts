import { parseLineInput } from './parseLineInput'

export function findOverlappingLines(lineInputs: string[]) {
  const lines = parseLineInput(lineInputs)

  console.log('lines: ', lines)
}
