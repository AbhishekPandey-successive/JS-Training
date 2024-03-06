// Question 5:

let array1=[2];
let array2=[1];

for(let i=3;i<=100;i++)
{
    if(i%2==0)
    {
        array1.push(i)
    }
    else{
        array2.push(i)
    }
}

console.log(array1);
console.log(array2);