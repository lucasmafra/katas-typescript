import { StringCalculator } from '../../src/string-calculator/string-calculator'

const expectAnswerOf = (input: string) => expect(StringCalculator.add(input))

describe('StringCalculator', () => {

    it('should return 0 for an empty string', () => {
        expectAnswerOf('').toBe(0)
    })

    it('should return the sum of one number', () => {
        expectAnswerOf('1').toBe(1)        
    })

    it('should return the sum of two numbers', () => {
        expectAnswerOf('1,2').toBe(3)
    })

    it('should return the sum of an unknow amount of numbers', () => {
        expectAnswerOf('1,2,3').toBe(6)
        expectAnswerOf('1,1,2,3,7').toBe(14)
    })

    it('should handle new lines between numbers', () => {
        expectAnswerOf('1\n2').toBe(3)
    })

    it('should handle new lines and comma between numbers', () => {
        expectAnswerOf('1\n2,3').toBe(6)
    })

    it('should support custom delimiters', () => {
        expectAnswerOf('//;\n1;2').toBe(3)
        expectAnswerOf('//.\n1.4').toBe(5)
    })

    it('should throw for negative numbers and display all of them in message', () => {
        const throwable = () => StringCalculator.add('1,-2,-3,1')
        expect(throwable).toThrow('Negative numbers are not allowed: -2,-3')
    })

    it('should ignore numbers bigger than 1000', () => {
        expectAnswerOf('2,1001').toBe(2)
    })

    it('should accept delimiters of any length', () => {
        expectAnswerOf('//[***]\n1***2***3').toBe(6)
    })

    it('should accept multiple delimiters', () => {
        expectAnswerOf('//[*][%]\n1*2%3').toBe(6)
    })

    it('should accept multiple delimiters of any length', () => {
        expectAnswerOf('//[***][%]\n1***2%3').toBe(6)
    })

})