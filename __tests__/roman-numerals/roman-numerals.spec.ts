import { RomanNumerals } from '../../src/roman-numerals/roman-numerals'

const expectAnswerOf = (n: number) => expect(RomanNumerals.decimalToRoman(n))

describe('RomanNumerals', () => {

    it('should return I for number 1', () => {
        expectAnswerOf(1).toBe('I')
    })

    it('should return II for number 2', () => {
        expectAnswerOf(2).toBe('II')
    })

    it('should return III for number 3', () => {
        expectAnswerOf(3).toBe('III')
    })

    it('should return IV for number 4', () => {
        expectAnswerOf(4).toBe('IV')
    })

    it('should return V for number 5', () => {
        expectAnswerOf(5).toBe('V')
    })

    it('should return VI for number 6', () => {
        expectAnswerOf(6).toBe('VI')
    })

    it('should return VII for number 7', () => {
        expectAnswerOf(7).toBe('VII')
    })

    it('should return VIII for number 8', () => {
        expectAnswerOf(8).toBe('VIII')
    })
    
    it('should return IX for number 9', () => {
        expectAnswerOf(9).toBe('IX')
    })

    it('should return X for number 10', () => {
        expectAnswerOf(10).toBe('X')
    })

    it('should return XI for number 11', () => {
        expectAnswerOf(11).toBe('XI')
    })

    it('should return XII for number 12', () => {
        expectAnswerOf(12).toBe('XII')
    })

    it('should return XIII for number 13', () => {
        expectAnswerOf(13).toBe('XIII')
    })
    
    it('should return XIV for number 14', () => {
        expectAnswerOf(14).toBe('XIV')
    })

    it('should return XVI for number 16', () => {
        expectAnswerOf(16).toBe('XVI')
    })

    it('should return XVI for number 16', () => {
        expectAnswerOf(16).toBe('XVI')
    })

    it('should return XIX for number 19', () => {
        expectAnswerOf(19).toBe('XIX')
    })

    it('should return MMXVIII for number 2018', () => {
        expectAnswerOf(2018).toBe('MMXVIII')
    })

    it('should return MCMXCVII for number 1997', () => {
        expectAnswerOf(1997).toBe('MCMXCVII')
    })
    
})