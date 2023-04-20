//function to add two numbers
//must take two arguments, add them, store in variable, return result
const add = (firstNum, secondNum) => {
    const sum = firstNum + secondNum

    return sum
}

//fucntion to subtract two numbers
//take two arguments, subtract them, store in variable, return result
const subtract = (firstNum, secondNum) => {
    const difference = firstNum - secondNum

    return difference
}

//function to multiply two numbers
//take two arguments, multiply them, store in variable, return result
const multiply = (firstNum, secondNum) => {
    const product = firstNum * secondNum

    return product
}

//function to divide two numbers
//take two arguments, multiply them, store in variable, return result
const divide = (dividend, divisor) => {
    const quotient = dividend/divisor

    return quotient
}

//function to square ONE number
//take ONE argument, multiply it by itself, store in var, return result
const square = (num) => {
    const squared = num*num

    return squared
}

const addTest = add(5, 6)
const subtractTest = subtract(13, 2)
const multiplyTest = multiply(5.5, 2)
const divideTest = divide(22, 2)
const squareTest = square(11)

/*Code test
console.log(`Addition result: ${addTest}
             Subtraction result: ${subtractTest}
             Multiplication result ${multiplyTest}:
             Division result ${divideTest}:
             Square result: ${squareTest}`)*/

//There are 18 two-legged animals on the farm and 6 four-legged animals