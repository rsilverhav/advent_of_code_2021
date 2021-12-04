import { getGammaEpsilon, getOxygenCO2 } from '../getDiagnosticValue'

describe('getDiagnosticValue', () => {
  const input = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ]
  describe('getGammaEpsilon', () => {
    it('should parse the test input correctly', () => {
      expect(getGammaEpsilon(input)).toBe(198)
    })
  })
  describe('getOxygenCO2', () => {
    it('should parse the test input correctly', () => {
      expect(getOxygenCO2(input)).toBe(230)
    })
  })
})
