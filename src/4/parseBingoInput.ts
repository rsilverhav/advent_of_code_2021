export type BingoBoard = number[][]

function getNumberRow(row: string, regex: RegExp) {
  return row
    .replace(/^ +/, '')
    .split(regex)
    .map((s) => Number(s))
}

export function parseBingoInput(bingoInput: string[]): {
  bingoNumbers: number[]
  bingoBoards: BingoBoard[]
} {
  const bingoNumbers: number[] = []
  const bingoBoards: BingoBoard[] = []

  let parsingBingoNumbers = true

  let currentBoard: BingoBoard = []
  for (const inputRow of bingoInput) {
    if (parsingBingoNumbers) {
      if (inputRow === '') {
        parsingBingoNumbers = false
        continue
      } else {
        bingoNumbers.push(...getNumberRow(inputRow, /,/))
      }
    } else {
      if (inputRow === '') {
        bingoBoards.push(currentBoard)
        currentBoard = []
      } else {
        currentBoard.push(getNumberRow(inputRow, / +/))
      }
    }
  }
  bingoBoards.push(currentBoard)

  return {
    bingoNumbers,
    bingoBoards,
  }
}
