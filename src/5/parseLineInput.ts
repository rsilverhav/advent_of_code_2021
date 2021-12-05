export interface Position {
  x: number
  y: number
}
export interface Line {
  start: Position
  end: Position
}

export function parseLineInput(lineInputs: string[]): Line[] {
  const regex = /(\d+),(\d+) -> (\d+),(\d+)/
  return lineInputs.map((lineInput) => {
    const [_, startX, startY, endX, endY] = regex.exec(lineInput) ?? []
    return {
      start: { x: Number(startX), y: Number(startY) },
      end: { x: Number(endX), y: Number(endY) },
    }
  })
}
