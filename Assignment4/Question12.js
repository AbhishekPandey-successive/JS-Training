// Question12.js:  Write a program to display intersection of two array

let array1=[2,3,6,8,10,12,5];
let array2=[5,6,4,3,9,8,2,10];

let array3=array1.filter((element)=>{
    return array2.includes(element);
})

console.log("Intersection of the arary1 and array2 is :",array3)