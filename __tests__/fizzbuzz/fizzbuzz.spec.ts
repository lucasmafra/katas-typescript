import { FizzBuzz } from '../../src/fizzbuzz/fizzbuzz'

const expectAnswerOf = (inputNumber: number) => expect(FizzBuzz.getAnswer(inputNumber))

describe('FizzBuzz', () => {

    it('should return the number 1 as a number', () => {
        expectAnswerOf(1).toBe("1")
    })

    it('should return the number 2 as a number', () => {
        expectAnswerOf(2).toBe("2")
    })

    it('should return the number 3 as Fizz', () => {
        expectAnswerOf(3).toBe("Fizz")
    })

    it('should return the number 6 as Fizz', () => {
        expectAnswerOf(6).toBe("Fizz")
    })

    it('should return the number 4 as a number', () => {
        expectAnswerOf(4).toBe("4")
    })

    it('sohuld return the number 5 as Buzz', () => {
        expectAnswerOf(5).toBe("Buzz")
    })

    it('should return the number 10 as Buzz', () => {
        expectAnswerOf(10).toBe("Buzz")
    })

    it('should return the number 15 as FizzBuzz', () => {
        expectAnswerOf(15).toBe("FizzBuzz")
    })

    it('should return the number 30 as FizzBuzz', () => {
        expectAnswerOf(30).toBe("FizzBuzz")
    })
})

