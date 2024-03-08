// Question 5:

let string1="hello john doe"

for(let i=0;i<string1.length;i++)
{
    if(string1[i]=='')
    {
        string1[i+1].toUpperCase()
    }
}

console.log(string1.trim())