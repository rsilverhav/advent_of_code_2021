export class BingoBoard {
  boardData: { num: number; marked: boolean }[][]
  hasWon: boolean
  private _width: number
  private _height: number

  constructor(boardData: number[][]) {
    this.boardData = []
    this.hasWon = false

    this._width = boardData[0].length
    this._height = boardData.length

    this._initBoardData(boardData)
  }

  markNumber(num: number) {
    for (const row of this.boardData) {
      const hit = row.find((r) => r.num === num)
      if (hit) {
        hit.marked = true
      }
    }
  }

  checkWin(): boolean {
    // Check rows
    const completeRows = new Array(this._height).fill(true)
    const completeColumns = new Array(this._height).fill(true)

    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        completeRows[y] = !completeRows[y] ? completeRows[y] : this.boardData[y][x].marked
        completeColumns[x] = !completeColumns[x] ? completeColumns[x] : this.boardData[y][x].marked
      }
    }
    this.hasWon = !!completeRows.find((r) => r) || !!completeColumns.find((c) => c)
    return this.hasWon
  }

  calculateUnmarkedSum(): number {
    let sum = 0
    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        const data = this.boardData[y][x]
        sum += !data.marked ? data.num : 0
      }
    }

    return sum
  }

  private _initBoardData(data: number[][]) {
    this.boardData = new Array(this._height)

    for (let y = 0; y < this._height; y++) {
      this.boardData[y] = new Array(this._width)
      for (let x = 0; x < this._width; x++) {
        this.boardData[y][x] = { num: data[y][x], marked: false }
      }
    }
  }
}
