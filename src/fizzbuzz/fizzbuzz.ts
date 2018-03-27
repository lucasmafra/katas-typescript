export namespace FizzBuzz {

    export const getAnswer = (n: number): string => {        
        let answer = n.toString()
        if (isDivisibleByThree(n) && isDivisibleByFive(n)) {
            answer = "FizzBuzz"
        } else  if (isDivisibleByFive(n)) {
            answer = "Buzz"
        } else if (isDivisibleByThree(n)) {
            answer = "Fizz"
        }        
        return answer
    }

    const isDivisibleByFive = (n: number): boolean => {
        return n % 5 === 0
    }

    const isDivisibleByThree = (n: number): boolean => {
        return n % 3 === 0
    }
}