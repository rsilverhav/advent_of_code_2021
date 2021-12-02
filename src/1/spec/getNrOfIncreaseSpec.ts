import { getNrOfIncrease } from '../getNrOfIncrease'

const testData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

describe('getNrOfIncrease', () => {
  it('parses the given test data, nrInSum 1', () => {
    expect(getNrOfIncrease({ depthValues: testData, nrInSum: 1 })).toBe(7)
  })

  it('parses the given test data, nrInSum 3', () => {
    expect(getNrOfIncrease({ depthValues: testData, nrInSum: 3 })).toBe(5)
  })
})
