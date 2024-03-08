
   // All of the above questions from 3-6 needs is done with arrow functions also

// Question 3:

const childFunction=()=>
{
    console.log("I am Child Function ")
}

const parentFunction=(childFunction)=>{
    childFunction();
}



parentFunction(childFunction)



// Question 4:

const myFunc1=(value)=>
{
    return value*value;
}

const answer=myFunc1(2);

console.log(answer);


// Question 5:

const myFunc2=(val1,val2)=>
{
    return val1+val2;
}

const answer1=myFunc2(2,3);
console.log(answer1);


// Question 6:

const checkEvenOdd=(value)=>
{
    if(value%2)
    {
        return true;
    }

    else{
        return false;
    }
}


const answer2=checkEvenOdd(20);
console.log(answer2);
