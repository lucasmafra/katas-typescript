import {Potter} from "../../src/potter/potter"

describe('Potter', () => {

  let potter: Potter

  const item = (book: string, amount: number) => ({ book, amount})

  const buy = (...items: { book: string, amount: number}[]) => {
    for (const item of items) {
      potter.buyBook(item.book, item.amount)
    }
  }

  beforeEach( () => {
    potter = new Potter()
  })

  it('should return zero for no books', () => {
    expect(potter.getTotalCost()).toBe(0)
  })

  it('should return the price of the book itself for one book', () => {
    buy(item("HP1",1))
    expect(potter.getTotalCost()).toBe(8)
  })

  it('should return two times the book unit cost for buying two identical books',  () => {
    buy(item("HP1",2))
    expect(potter.getTotalCost()).toBe(16)
  })

  it('should apply a 5% discount when buying two different books',  () => {
    buy(item("HP1",1), item("HP2",1))
    expect(potter.getTotalCost()).toBe(16 - 0.05*16)
  })

  it('should apply a 10% discount when buying three different books', () => {
    buy(item("HP1",1), item("HP2",1), item("HP3", 1))
    expect(potter.getTotalCost()).toBe(24 - 0.1*24)
  })

  it('should apply a 20% discount when buying four different books', () => {
    buy(item("HP1",1), item("HP2",1), item("HP3", 1), item("HP4", 1))
    expect(potter.getTotalCost()).toBe(32 - 0.2*32)
  })

  it('should apply a 25% discount when buying five different books', () => {
    buy(item("HP1",1), item("HP2",1), item("HP3", 1), item("HP4", 1), item("HP5", 1))
    expect(potter.getTotalCost()).toBe(40 - 0.25*40)
  })

  it('should apply discount only for different books', () => {
    buy(item("HP1",2), item("HP2", 1), item("HP3", 1))
    expect(potter.getTotalCost()).toBe(32 - 0.1*32)
  })

})
