import { getNrOfIncrease, getNrOfIncreaseSum } from '../getNrOfIncrease'

const testData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

describe('getNrOfIncrease', () => {
  it('parses the given test data', () => {
    expect(getNrOfIncrease(testData)).toBe(7)
  })
})

describe('getNrOfIncreaseSum', () => {
  it('parses the given test data, nrInSum 1', () => {
    expect(getNrOfIncreaseSum({ depthValues: testData, nrInSum: 1 })).toBe(7)
  })

  it('parses the given test data, nrInSum 3', () => {
    expect(getNrOfIncreaseSum({ depthValues: testData, nrInSum: 3 })).toBe(5)
  })
})
