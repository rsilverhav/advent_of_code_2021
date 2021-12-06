import { readNumberInput } from '../readInput'
import { simulateFishSpawn } from './simulateFishSpawn'

const input = readNumberInput('./src/6/input_6')

console.log(
  '6a: ',
  simulateFishSpawn({
    initialFishes: input,
    daysToSimulate: 80,
    spawnRateDays: 7,
    bornSpawnRateDays: 9,
  })
)
