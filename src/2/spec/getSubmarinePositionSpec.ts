import { getSubmarinePosition } from '../getSubmarinePosition'

describe('getSubmarinePosition', () => {
  const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']
  it('should parse test input correctly', () => {
    expect(getSubmarinePosition(input)).toBe(150)
  })
})
