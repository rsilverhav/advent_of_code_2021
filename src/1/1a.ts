import { readNumberInput } from '../readInput'
import { getNrOfIncreaseSum } from './getNrOfIncrease'

const input = readNumberInput('./src/1/input_1')

const res = getNrOfIncreaseSum({ depthValues: input, nrInSum: 1 })
console.log('1a: ', res)
