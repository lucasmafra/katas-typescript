import * as escapeRegExp from 'escape-string-regexp'

export interface InputParserConfig {
    newLine: string
    delimiterPrefix: string
    defaultDelimiter: string
    delimiterStartSymbol: string
    delimiterEndSymbol: string
}

export class InputParser {

    private config: InputParserConfig

    constructor(config: InputParserConfig) {
        this.config = config
    }

    public parse = (input: string): number[] => {
        if (this.stringIsEmpty(input)) {
            return []
        }
        const delimiter = this.getDelimiterRegExp(input)
        const inputWithoutHeader = this.getInputWithoutHeader(input)        
        const regex = new RegExp(`[${delimiter}${this.config.newLine}]`)
        return inputWithoutHeader.split(regex)
               .map( element => parseInt(element))
               .filter( element => element <= 1000)
    }
    
    private hasCustomDelimiter = (input: string) => input.startsWith(this.config.delimiterPrefix)
    
    private getDelimiterRegExp = (input: string): string => {
        let delimiter = this.config.defaultDelimiter
        if (this.hasCustomDelimiter(input)) {
            delimiter = input.slice(
                    input.indexOf(this.config.delimiterPrefix) + this.config.delimiterPrefix.length,
                    input.indexOf(this.config.newLine)
                )
                .replace(new RegExp(escapeRegExp(this.config.delimiterStartSymbol), 'g'),'(')
                .replace(new RegExp(escapeRegExp(this.config.delimiterEndSymbol), 'g'),')')
            delimiter = escapeRegExp(delimiter)
        }
        return delimiter
    }
    
    private getInputWithoutHeader = (input: string): string => {
        let inputWithoutHeader = input
        if (this.hasCustomDelimiter(input)) {
            inputWithoutHeader = input.slice(
                        input.indexOf(this.config.newLine) + this.config.newLine.length,
                        input.length)
        }
        return inputWithoutHeader
    }
    
    private stringIsEmpty = (input: string): boolean => input.length === 0
}

