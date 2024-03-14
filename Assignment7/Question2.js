// Give an example of using multiple callback functions in a single function in JavaScript

function squareNumbers(number) {
    console.log(`Squared number = ${number * number}`)
  }
  
  function addNumbers(number1, number2) {
    return number1 + number2
  }
  
  function useCallbackForNumbers(callbackAdd, callbackSquare,num1,num2) {
    console.log(callbackAdd(num1, num2))
    callbackSquare(num1+num2)
  }
  
  useCallbackForNumbers(addNumbers, squareNumbers, 2, 3)