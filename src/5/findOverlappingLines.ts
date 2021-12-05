import { Line, parseLineInput, Point } from './parseLineInput'

function isStraightLine(line: Line): boolean {
  return line.start.x === line.end.x || line.start.y === line.end.y
}

function getPointsInLine(line: Line): Point[] {
  const linePoints: Point[] = []
  const currentPoint: Point = { x: line.start.x, y: line.start.y }

  linePoints.push({ ...currentPoint })

  while (currentPoint.x !== line.end.x || currentPoint.y !== line.end.y) {
    if (currentPoint.x !== line.end.x) {
      currentPoint.x += currentPoint.x < line.end.x ? 1 : -1
    }
    if (currentPoint.y !== line.end.y) {
      currentPoint.y += currentPoint.y < line.end.y ? 1 : -1
    }
    linePoints.push({ ...currentPoint })
  }

  return linePoints
}
function getIndexFromPoint(point: Point): string {
  return `${point.x},${point.y}`
}

export function findOverlappingLines(lineInputs: string[], includeDiagonal?: boolean) {
  const lines = parseLineInput(lineInputs)
  const visited: { [key: string]: number } = {}

  for (const line of lines) {
    if (includeDiagonal || isStraightLine(line)) {
      if (!isStraightLine(line)) {
      }
      const points = getPointsInLine(line)
      for (const point of points) {
        visited[getIndexFromPoint(point)] = (visited[getIndexFromPoint(point)] ?? 0) + 1
      }
    }
  }

  return Object.keys(visited).reduce((sum, key) => sum + (visited[key] >= 2 ? 1 : 0), 0)
}
