// Question 2:

// Pattern1:

// let n = 4; 
// let string = "";
// let count = 1;

// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= i; j++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);


// Patter 2

let n1 = 5; 
let string1 = "";
// External loop
for (let i = 1; i <= n1; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string1 += i;
  }
  string1 += "\n";
}
console.log(string1);




