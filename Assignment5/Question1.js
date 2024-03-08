// Write a program to iterate over object.

const myObject={myName:"Abhishek",age:21,Designation:"Trainee Engineer"}


for(let key in myObject)
{
    console.log(`${key}:${myObject[key]}`)
}