import { findShortestAlign } from '../findShortestAlign'

const testData = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

describe('findShortestAlign', () => {
  it('parses the given test data without increased cost', () => {
    expect(findShortestAlign(testData, false)).toBe(37)
  })

  it('parses the given test data with increased cost', () => {
    expect(findShortestAlign(testData, true)).toBe(168)
  })
})
