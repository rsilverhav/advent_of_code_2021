import { readNumberInput } from '../readInput'
import { getNrOfIncrease } from './getNrOfIncrease'

const input = readNumberInput('./src/1/input_1a')

const res = getNrOfIncrease(input)
console.log('1a: ', res)
