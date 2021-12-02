import { readNumberInput } from '../readInput'
import { getNrOfIncrease } from './getNrOfIncrease'

const input = readNumberInput('./src/1/input_1')

const res = getNrOfIncrease({ depthValues: input, nrInSum: 3 })
console.log('1b: ', res)
