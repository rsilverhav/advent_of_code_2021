export type BingoBoardData = number[][]

function getNumberRow(row: string, regex: RegExp) {
  return row
    .replace(/^ +/, '')
    .split(regex)
    .map((s) => Number(s))
}

export function parseBingoInput(bingoInput: string[]): {
  bingoNumbers: number[]
  bingoBoardsData: BingoBoardData[]
} {
  const bingoNumbers: number[] = []
  const bingoBoardsData: BingoBoardData[] = []

  let parsingBingoNumbers = true

  let currentBoard: BingoBoardData = []
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
        bingoBoardsData.push(currentBoard)
        currentBoard = []
      } else {
        currentBoard.push(getNumberRow(inputRow, / +/))
      }
    }
  }
  bingoBoardsData.push(currentBoard)

  return {
    bingoNumbers,
    bingoBoardsData,
  }
}
