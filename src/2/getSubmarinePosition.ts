export interface Position {
  x: number
  y: number
}

type Actions = { [key in Directions]: (amount: number) => { dx: number; dy: number } }

type Directions = 'forward' | 'down' | 'up'

function getSubmarinePositionBase(commands: string[], actions: Actions): number {
  const currentPosition: Position = { x: 0, y: 0 }
  for (const command of commands) {
    const [direction, amount] = command.split(' ')
    const numAmount = Number(amount)
    const actionDelta = actions[direction as Directions](numAmount)
    currentPosition.x += actionDelta.dx
    currentPosition.y += actionDelta.dy
  }

  return currentPosition.x * currentPosition.y
}

export function getSubmarinePosition(commands: string[]): number {
  const actions: Actions = {
    up: (amount) => ({ dx: 0, dy: -amount }),
    down: (amount) => ({ dx: 0, dy: amount }),
    forward: (amount) => ({ dx: amount, dy: 0 }),
  }
  return getSubmarinePositionBase(commands, actions)
}

export function getSubmarinePositionAim(commands: string[]): number {
  let aim = 0
  const actions: Actions = {
    up: (amount) => {
      aim -= amount
      return { dx: 0, dy: 0 }
    },
    down: (amount) => {
      aim += amount
      return { dx: 0, dy: 0 }
    },
    forward: (amount) => {
      return { dx: amount, dy: aim * amount }
    },
  }
  return getSubmarinePositionBase(commands, actions)
}
