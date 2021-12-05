export interface Point {
  x: number
  y: number
}
export interface Line {
  start: Point
  end: Point
}

export function parseLineInput(lineInputs: string[]): Line[] {
  const regex = /(\d+),(\d+) -> (\d+),(\d+)/
  return lineInputs.map((lineInput) => {
    const regexRes = regex.exec(lineInput)
    if ((regexRes?.length ?? 0) < 5) {
      throw new Error(`Failed parsing line input with regex: ${lineInput}`)
    }
    const [_, startX, startY, endX, endY] = regex.exec(lineInput) ?? []
    return {
      start: { x: Number(startX), y: Number(startY) },
      end: { x: Number(endX), y: Number(endY) },
    }
  })
}
