function childFunction()
{
    console.log("I am Child Function ")
}
// Function Expression which takes another function as arguments:

const parentFunction=function(childFunction){
    childFunction();
}


parentFunction(childFunction)