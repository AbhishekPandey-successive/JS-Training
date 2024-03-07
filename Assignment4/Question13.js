// Question 13:
function isInverse(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[arr[i]]!=i)
        {
            return false;
        }

    }

    
            return true;
        
}

var arr=[1,2,3,4,5];

if(isInverse(arr))
{
console.log("Yes")
}

else{
    console.log("No")
}
