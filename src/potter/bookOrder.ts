export class BookOrder {

  private BOOK_UNIT_COST = 8
  private distinctBooks = new Array<Books>()

  private totalCost: number = 0

  public getTotalCost(): number {
    const discount = this.getDiscount()
    return this.totalCost - discount
  }

  public addItem(book: Books, amount: number): void {
    this.isNewBook(book) && this.distinctBooks.push(book)
    this.totalCost += this.BOOK_UNIT_COST * amount
  }

  private getDiscount() {
    let distinctBooks = this.distinctBooks.length
    return distinctBooks*this.BOOK_UNIT_COST*this.BOOK_DISCOUNT_TABLE[distinctBooks]
  }

  private isNewBook(book: Books) {
    return !this.distinctBooks.find(b => book === b)
  }

  private BOOK_DISCOUNT_TABLE: { [key: number]: number } = {
    // [DISTINCT BOOKS : DISCOUNT]
        0: 0,
        1: 0,
        2: 0.05,
        3: 0.1,
        4: 0.2,
        5: 0.25,
  }

}

export enum Books {
  HP1,
  HP2,
  HP3,
  HP4,
  HP5,
}
