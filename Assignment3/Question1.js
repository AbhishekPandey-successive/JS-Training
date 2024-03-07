//  program to perform functionality of a calculator (add,sub,multiply,divide)

const calculatorObject={
    '+':(a,b)=>a+b,
    '-':(a,b)=>a-b,
    '*':(a,b)=>a*b,
    '/":(a,b)=>a/b
}

console.log(calculatorObject['+'](2,3))
console.log(calculatorObject['-'](2,3))
console.log(calculatorObject['*'](2,3))
console.log(calculatorObject['/'](2,3))
