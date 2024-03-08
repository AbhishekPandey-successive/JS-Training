// Question 2:

// Pattern1:

let n = 4; 
let string = "";
let count = 1;

for (let i = 1; i <= n; i++) 
{
  
  for (let j = 1; j <= i; j++) 
  {
    string += count;
    count++;
  }
  console.log(string)
  string="";
}




// Patter 2

let n1 = 5; 
let string1 = "";

for (let i = 1; i <= n1; i++) 
{
  let count=i
  for (let j = 1; j <= i; j++) 
  {
    string1 += i;
  }
  console.log(string1)
  string1="";
}





