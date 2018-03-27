import { InputParser, InputParserConfig } from './input-parser'

export namespace StringCalculator {

    export const add = (input: string): number => {
        const inputParser = new InputParser(inputParserConfig)
        const addends = inputParser.parse(input)
        ensureNoNegativeAddends(addends)
        return sumOfArrayElements(addends)
    }

    const ensureNoNegativeAddends = (addends: number[]): void => {
        const negativeNumbersList = addends.filter(addend => addend < 0)
        if (negativeNumbersList.length) {
            throw new Error(`Negative numbers are not allowed: ${negativeNumbersList.toString()}`)
        }
    }

    const sumOfArrayElements = (array: number[]): number => {
        return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }

    const inputParserConfig: InputParserConfig = {
        newLine: '\n',
        delimiterPrefix: '//',
        defaultDelimiter:  ',',
        delimiterStartSymbol: '[',
        delimiterEndSymbol: ']'
    }
}