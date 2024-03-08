// Question 11

function bubblesort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-i-1;j++)
        {
            if (arr[j] > arr[j + 1]) 
            {
 
                
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }

}
console.log(arr)
}

let array1=[3,2,9,10,5,6,4];
bubblesort(array1);