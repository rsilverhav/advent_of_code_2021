export interface Position {
  x: number
  y: number
}
type Directions = 'forward' | 'down' | 'up'

const commandDeltas: { [key in Directions]: Position } = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  forward: { x: 1, y: 0 },
}

export function getSubmarinePosition(commands: string[]): number {
  const currentPosition: Position = { x: 0, y: 0 }
  for (const command of commands) {
    const [direction, amount] = command.split(' ')
    const numAmount = Number(amount)
    console.log('direction: ', direction, command, commands.length)
    const commandDelta = commandDeltas[direction as Directions]
    currentPosition.x += commandDelta.x * numAmount
    currentPosition.y += commandDelta.y * numAmount
  }

  return currentPosition.x * currentPosition.y
}
