import { findOverlappingLines } from '../findOverlappingLines'

const testData = [
  '0,9 -> 5,9',
  '8,0 -> 0,8',
  '9,4 -> 3,4',
  '2,2 -> 2,1',
  '7,0 -> 7,4',
  '6,4 -> 2,0',
  '0,9 -> 2,9',
  '3,4 -> 1,4',
  '0,0 -> 8,8',
  '5,5 -> 8,2',
]

describe('parseLines', () => {
  it('finds nr of overlapping points of all lines, only straight lines', () => {
    expect(findOverlappingLines(testData)).toBe(5)
  })
  it('finds nr of overlapping points of all lines, including diagonal', () => {
    expect(findOverlappingLines(testData, true)).toBe(12)
  })
})
