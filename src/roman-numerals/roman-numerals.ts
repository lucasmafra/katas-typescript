export namespace RomanNumerals {

    export const decimalToRoman = (n: number): string => {
        let answer = ""
        for (const rule of DecimalRomanRulesInDescendingOrder) {
            while (n >= rule.decimal) {
                answer += rule.roman
                n -= rule.decimal
            }
        }
        return answer
    }

    interface IDecimalRomanRule {
        decimal: number,
        roman: string
    }

    const decimalRule = (decimal: number, roman: string): IDecimalRomanRule => ({ decimal, roman })

    const DecimalRomanRulesInDescendingOrder: IDecimalRomanRule[] = [
        decimalRule(1000, 'M'),
        decimalRule(900, 'CM'),
        decimalRule(500, 'D'),
        decimalRule(400, 'CD'),
        decimalRule(100, 'C'),
        decimalRule(90, 'XC'),
        decimalRule(50, 'L'),
        decimalRule(40, 'XL'),
        decimalRule(10, 'X'),
        decimalRule(9, 'IX'),
        decimalRule(5, 'V'),
        decimalRule(4, 'IV'),
        decimalRule(1, 'I'),
    ]

}

console.log(RomanNumerals.decimalToRoman(1))
