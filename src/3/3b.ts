import { readInput } from '../readInput'
import { getOxygenCO2 } from './getDiagnosticValue'

const input = readInput('./src/3/input_3')

console.log('3b: ', getOxygenCO2(input))
