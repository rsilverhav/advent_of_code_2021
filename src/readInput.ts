import * as fs from 'fs'

export function readInput(path: string): string[] {
  const res = fs.readFileSync(path)

  return res.toString().split('\n')
}

export function readNumberInput(path: string): number[] {
  const stringArr = readInput(path)
  return stringArr.map((s) => {
    const num = Number(s)
    if (Number.isNaN(num)) {
      throw new Error('Failed reading number inputs')
    } else {
      return num
    }
  })
}
