// function checkprime(a)
// {
//     for(let i=2;i<=49;i++)
//     {
//         if(a%i==0)
//         {
//             return false;
//         }
//     }

//     return true;
// }


// for(let i=1;i<=50;i++)
// {
//     if(checkprime(i))
//     {
//         console.log(i)
//     }
// }



let count=0
let i,j 
for(j=2;j<=50;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0


  
}
