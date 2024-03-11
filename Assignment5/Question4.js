// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

function deepCloneObject(originalObject)
{
   const deepObject={...originalObject}
   deepObject.myName="Utsav"
   

   return deepObject;
}

const myObject={
    myName:"Abhishek",
    age:21,
    miniObj:{company:"Successive",city:"Noida"},
    myArray:[2,3,4]
}

console.log(myObject);
console.log(deepCloneObject(myObject));
console.log(myObject);