import {BookOrder, Books} from "../../src/potter/bookOrder"

describe('BookOrder', () => {

  let bookOrder: BookOrder

  const BOOK_UNIT_COST = 8

  const item = (Books: Books, amount: number) => ({ Books, amount})

  const order = (...items: { Books: Books, amount: number}[]) => {
    for (const item of items) {
      bookOrder.addItem(item.Books, item.amount)
    }
  }

  beforeEach( () => {
    bookOrder = new BookOrder()
  })

  it('should return zero for no book', () => {
    expect(bookOrder.getTotalCost()).toBe(0)
  })

  it('should return the price of the Book itself for one book', () => {
    order(item(Books.HP1,1))
    expect(bookOrder.getTotalCost()).toBe(1*BOOK_UNIT_COST)
  })

  it('should return two times the Book unit cost for buying two identical books',  () => {
    order(item(Books.HP1,2))
    expect(bookOrder.getTotalCost()).toBe(2*BOOK_UNIT_COST)
  })

  it('should apply a 5% discount when buying two distinct books',  () => {
    order(item(Books.HP1,1), item(Books.HP2,1))
    expect(bookOrder.getTotalCost()).toBe(2*BOOK_UNIT_COST*(1 - 0.05))
  })

  it('should apply a 10% discount when buying three distinct books', () => {
    order(item(Books.HP1,1), item(Books.HP2,1), item(Books.HP3, 1))
    expect(bookOrder.getTotalCost()).toBe(3*BOOK_UNIT_COST*(1 - 0.1))
  })

  it('should apply a 20% discount when buying four distinct books', () => {
    order(item(Books.HP1,1), item(Books.HP2,1), item(Books.HP3, 1), item(Books.HP4, 1))
    expect(bookOrder.getTotalCost()).toBe(4*BOOK_UNIT_COST*(1 - 0.2))
  })

  it('should apply a 25% discount when buying five distinct books', () => {
    order(item(Books.HP1,1), item(Books.HP2,1), item(Books.HP3, 1), item(Books.HP4, 1), item(Books.HP5, 1))
    expect(bookOrder.getTotalCost()).toBe(5*BOOK_UNIT_COST*(1 - 0.25))
  })

  it('should only apply discount to distinct books', () => {
    order(item(Books.HP1,2), item(Books.HP2, 1), item(Books.HP3, 1))
    expect(bookOrder.getTotalCost()).toBe(3*BOOK_UNIT_COST*(1 - 0.1) + 1*BOOK_UNIT_COST)
  })

})
