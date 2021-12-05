import { readInput } from '../readInput'
import { findOverlappingLines } from './parseLines'

const input = readInput('./src/5/input_5')

console.log('5b: ', findOverlappingLines(input))
