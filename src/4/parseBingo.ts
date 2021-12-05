import { BingoBoard } from './BingoBoard'
import { parseBingoInput } from './parseBingoInput'

export function parseBingo(bingoInput: string[]): { firstWin: number; lastWin: number } {
  const { bingoNumbers, bingoBoardsData } = parseBingoInput(bingoInput)
  let bingoBoards = bingoBoardsData.map((data) => new BingoBoard(data))
  let firstWin = 0
  let lastWin = 0

  for (const bingoNumber of bingoNumbers) {
    for (const bingoBoard of bingoBoards) {
      bingoBoard.markNumber(bingoNumber)
      if (bingoBoard.checkWin()) {
        const bingoValue = bingoNumber * bingoBoard.calculateUnmarkedSum()
        if (!firstWin) {
          firstWin = bingoValue
        } else if (bingoBoards.length === 1) {
          lastWin = bingoValue
        }
      }
    }
    bingoBoards = bingoBoards.filter((b) => !b.hasWon)
  }
  return { firstWin, lastWin }
}
