import { parseBingoInput } from './parseBingoInput'

export function parseBingo(bingoInput: string[]): number {
  const { bingoNumbers, bingoBoards } = parseBingoInput(bingoInput)
  console.log(bingoNumbers, bingoBoards)
  return 0
}
