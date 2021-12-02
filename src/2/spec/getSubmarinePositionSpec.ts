import { getSubmarinePosition, getSubmarinePositionAim } from '../getSubmarinePosition'

const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

describe('getSubmarinePosition', () => {
  it('should parse test input correctly', () => {
    expect(getSubmarinePosition(input)).toBe(150)
  })
})

describe('getSubmarinePositionAim', () => {
  it('should parse test input correctly with aim', () => {
    expect(getSubmarinePositionAim(input)).toBe(900)
  })
})
