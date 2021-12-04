import { BingoBoard } from '../BingoBoard'

describe('BingoBoard', () => {
  const testData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  it('initMarked sets markedData to correct size arrays with false', () => {
    const board = new BingoBoard(testData)

    expect(board.boardData).toEqual([
      [
        { num: 1, marked: false },
        { num: 2, marked: false },
        { num: 3, marked: false },
      ],
      [
        { num: 4, marked: false },
        { num: 5, marked: false },
        { num: 6, marked: false },
      ],
      [
        { num: 7, marked: false },
        { num: 8, marked: false },
        { num: 9, marked: false },
      ],
    ])
  })

  it('markNumber sets markedData to true in correct pos', () => {
    const board = new BingoBoard(testData)

    board.markNumber(5)

    expect(board.boardData).toEqual([
      [
        { num: 1, marked: false },
        { num: 2, marked: false },
        { num: 3, marked: false },
      ],
      [
        { num: 4, marked: false },
        { num: 5, marked: true },
        { num: 6, marked: false },
      ],
      [
        { num: 7, marked: false },
        { num: 8, marked: false },
        { num: 9, marked: false },
      ],
    ])
  })

  it('marking a row makes checkWin return true', () => {
    const board = new BingoBoard(testData)

    board.markNumber(5)
    expect(board.checkWin()).toBe(false)
    board.markNumber(4)
    expect(board.checkWin()).toBe(false)
    board.markNumber(6)
    expect(board.checkWin()).toBe(true)
  })

  it('marking a column makes checkWin return true', () => {
    const board = new BingoBoard(testData)

    board.markNumber(3)
    expect(board.checkWin()).toBe(false)
    board.markNumber(6)
    expect(board.checkWin()).toBe(false)
    board.markNumber(9)
    expect(board.checkWin()).toBe(true)
  })

  it('calculating sum of unmarked', () => {
    const board = new BingoBoard(testData)

    board.markNumber(4)
    board.markNumber(5)
    board.markNumber(6)
    board.markNumber(7)
    board.markNumber(8)
    board.markNumber(9)

    expect(board.calculateUnmarkedSum()).toBe(1 + 2 + 3)
  })
})
