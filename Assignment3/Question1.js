//  program to perform functionality of a calculator (add,sub,multiply,divide)

function addition(a,b)
{
    console.log(a+b)
}

function subtraction(a,b)
{
    console.log(a-b)
}

function multiply(a,b)
{
    console.log(a*b)
}

function divide(a,b)
{
    console.log(a/b)
}


const operator=prompt("User enter the Opertaion to be per");

switch(operator)
{
    case '+':
        addition(2,4)
        break;
    
    case '-' :
        subtraction(2,4)
        break;

    case '*' :
        multiply(2,4)
        break;

    case '/' :
        divide()
        break;

    default:
        console.log("Not Valid Operation")
}