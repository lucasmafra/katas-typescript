export class Potter {

  private BOOK_UNIT_COST = 8
  private books = new Array<{ id: string, amount: number }>()
  private totalCost: number = 0

  public getTotalCost(): number {
    const discount = this.getDiscount()
    return this.totalCost - discount
  }

  public buyBook(bookId: string, bookAmount: number): void {
    const book = this.books.find( book => book.id === bookId)
    if (!book) {
      this.books.push({ id: bookId, amount: bookAmount})
    } else {
      book.amount += bookAmount
    }
    this.totalCost += this.BOOK_UNIT_COST * bookAmount
  }

  private getDiscount() {
      return this.BOOK_DISCOUNT_TABLE[this.books.length]*this.totalCost
  }

  private BOOK_DISCOUNT_TABLE: { [key: number]: number } = {
    0: 0,
    1: 0,
    2: 0.05,
    3: 0.1,
    4: 0.2,
    5: 0.25,
  }

}
