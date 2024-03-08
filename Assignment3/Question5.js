// Question 5: In Single Iteration

let n=100;
const evenArray=[];
const oddArray=[];

for(let i=1;i<=100;i++)
{
    if(i%2==0)
    {
        evenArray.push(i);
    }

    else{
        oddArray.push(i);
    }
}


const finalArray=evenArray.concat(oddArray)
console.log(finalArray)
