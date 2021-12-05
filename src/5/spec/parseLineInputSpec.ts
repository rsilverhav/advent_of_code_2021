import { Line, parseLineInput } from '../parseLineInput'

describe('parseLineInput', () => {
  const expectedLines: Line[] = [
    { start: { x: 0, y: 9 }, end: { x: 5, y: 9 } },
    { start: { x: 8, y: 0 }, end: { x: 0, y: 8 } },
    { start: { x: 9, y: 4 }, end: { x: 3, y: 4 } },
    { start: { x: 2, y: 2 }, end: { x: 2, y: 1 } },
    { start: { x: 7, y: 0 }, end: { x: 7, y: 4 } },
    { start: { x: 6, y: 4 }, end: { x: 2, y: 0 } },
    { start: { x: 0, y: 9 }, end: { x: 2, y: 9 } },
    { start: { x: 3, y: 4 }, end: { x: 1, y: 4 } },
    { start: { x: 0, y: 0 }, end: { x: 8, y: 8 } },
    { start: { x: 5, y: 5 }, end: { x: 8, y: 2 } },
  ]
  const testData = expectedLines.map(
    (line) => `${line.start.x},${line.start.y} -> ${line.end.x},${line.end.y}`
  )
  it('parses input data to Line[]', () => {
    expect(parseLineInput(testData)).toEqual(expectedLines)
  })
})
