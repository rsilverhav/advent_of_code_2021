import { readInput } from '../readInput'
import { getGammaEpsilon } from './getDiagnosticValue'

const input = readInput('./src/3/input_3')

console.log('3a: ', getGammaEpsilon(input))
