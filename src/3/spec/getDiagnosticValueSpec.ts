import { getDiagnosticValue } from '../getDiagnosticValue'

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

  it('should parse the test input correctly', () => {
    expect(getDiagnosticValue(input)).toBe(198)
  })
})
