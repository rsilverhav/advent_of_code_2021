import { readNumberInput } from '../readInput'
import { findShortestAlign } from './findShortestAlign'

const input = readNumberInput('./src/7/input_7')

console.log('7a: ', findShortestAlign(input, false))
