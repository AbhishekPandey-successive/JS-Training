// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// // Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person{
    constructor(firstName,lastName,age)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    fullName()
    {
        return `FullName of the Person is ${this.firstName +" "+  this.lastName} `
    }


    averageAge(ageArray)
    {
        let finalAverageAge=0;
      for(let i=0;i<ageArray.length;i++)
      {
        finalAverageAge=finalAverageAge+ageArray[i].age
      }
      return finalAverageAge/ageArray.length
    }
}

const user=new Person("Abhsihek","Pandey",21)
let a=user.fullName();
console.log(a);



// Part2
const user1=new Person("Utsav","Jain",20)
const user2=new Person("Anant","Mishra",23)
const user3=new Person("Ayush","Pandey",25)

const myAverageAge=user.averageAge([user1,user2,user3])
console.log(myAverageAge)

