import { BingoBoard } from './BingoBoard'
import { parseBingoInput } from './parseBingoInput'

export function parseBingo(bingoInput: string[]): number {
  const { bingoNumbers, bingoBoardsData } = parseBingoInput(bingoInput)
  const bingoBoards = bingoBoardsData.map((data) => new BingoBoard(data))

  for (const bingoNumber of bingoNumbers) {
    for (const bingoBoard of bingoBoards) {
      bingoBoard.markNumber(bingoNumber)
      if (bingoBoard.checkWin()) {
        return bingoNumber * bingoBoard.calculateUnmarkedSum()
      }
    }
  }
  return 0
}
