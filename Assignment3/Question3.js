// Question 3:

// Pattern 2:

 let n=4;
let count=1;
let string="";

for(let i=1;i<=n;i++)
{
    for(let j=1;j<=i;j++)
    {
        string +=count;
        count++;
    }
    console.log(string)
    
    string="";
}



// Pattern 1:

let n=4;

let string="";

for(let i=1;i<=n;i++)
{
    let count=i;
    for(let j=1;j<=i;j++)
    {
        string +=count;
        
    }
    console.log(string)
    
    string="";
}
