import { simulateFishSpawn } from '../simulateFishSpawn'

// @ts-ignore
const testData = [3, 4, 3, 1, 2]

describe('simulateFishSpawn', () => {
  it('small', () => {
    expect(
      simulateFishSpawn({
        initialFishes: [3],
        daysToSimulate: 18,
        spawnRateDays: 7,
        bornSpawnRateDays: 9,
      })
    ).toBe(5)
  })
  it('parses the given test data, 18 days', () => {
    expect(
      simulateFishSpawn({
        initialFishes: testData,
        daysToSimulate: 18,
        spawnRateDays: 7,
        bornSpawnRateDays: 9,
      })
    ).toBe(26)
  })
  it('parses the given test data, 18 days', () => {
    expect(
      simulateFishSpawn({
        initialFishes: testData,
        daysToSimulate: 20,
        spawnRateDays: 7,
        bornSpawnRateDays: 9,
      })
    ).toBe(34)
  })
  it('parses the given test data, 80 days', () => {
    expect(
      simulateFishSpawn({
        initialFishes: testData,
        daysToSimulate: 80,
        spawnRateDays: 7,
        bornSpawnRateDays: 9,
      })
    ).toBe(5934)
  })

  it('parses the given test data, 256 days', () => {
    expect(
      simulateFishSpawn({
        initialFishes: testData,
        daysToSimulate: 256,
        spawnRateDays: 7,
        bornSpawnRateDays: 9,
      })
    ).toBe(26984457539)
  })
})
