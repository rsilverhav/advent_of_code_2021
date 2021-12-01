import { getNrOfIncrease } from '../getNrOfIncrease'

describe('getNrOfIncrease', () => {
  const testData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
  it('parses the given test data', () => {
    expect(getNrOfIncrease(testData)).toBe(7)
  })
})
