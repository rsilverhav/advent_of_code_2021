import { Line, parseLineInput, Point } from './parseLineInput'

function isStraightLine(line: Line): boolean {
  return line.start.x === line.end.x || line.start.y === line.end.y
}

function getPointsInLine(line: Line): Point[] {
  const linePoints: Point[] = []
  if (line.start.x === line.end.x) {
    for (let y = Math.min(line.start.y, line.end.y); y <= Math.max(line.start.y, line.end.y); y++) {
      linePoints.push({ x: line.start.x, y })
    }
  } else if (line.start.y === line.end.y) {
    for (let x = Math.min(line.start.x, line.end.x); x <= Math.max(line.start.x, line.end.x); x++) {
      linePoints.push({ x, y: line.start.y })
    }
  }
  return linePoints
}
function getIndexFromPoint(point: Point): string {
  return `${point.x},${point.y}`
}

export function findOverlappingLines(lineInputs: string[]) {
  const lines = parseLineInput(lineInputs)
  const visited: { [key: string]: number } = {}

  for (const line of lines) {
    if (isStraightLine(line)) {
      const points = getPointsInLine(line)
      for (const point of points) {
        visited[getIndexFromPoint(point)] = (visited[getIndexFromPoint(point)] ?? 0) + 1
      }
    }
  }

  return Object.keys(visited).reduce((sum, key) => sum + (visited[key] >= 2 ? 1 : 0), 0)
}
