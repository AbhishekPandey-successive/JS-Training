// Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const myArray=[{myName:"Abhishek",age:22},
               {myName:"Utasav",age:20},
            {myName:"Sumit",age:24}];

          myArray.sort((a,b)=>{
            return a.age-b.age;
          })

          console.log(myArray)
          