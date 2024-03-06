// Question 3:
let string1="abcabcdabbcc";

let result={}

for(let i=0;i<string1.length;i++)
{
    let ch=string1.charAt(i)
    if(!result[ch])
    {
        result[ch]=1
    }

    else{
        result[ch]+=1
    }
}

console.log("The occurence of each letter in given string is:",result)