// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const myArray=[{myName:"Abhsihek",age:"20",id:1249},
               {myName:"Utsav",age:22,id:1250},
            {myName:"Anant",age:21,id:1252},
            {myName:"Ayush",age:223,id:1253},
            {myName:"Udit",age:25,id:1254},]

            console.log(myArray)

            myArray.forEach((value)=>{
                return delete value.id;
            })

            console.log(myArray);