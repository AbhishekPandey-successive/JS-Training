// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person{
    constructor(name,age,gender,interests)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.interests=interests;
    }

    greeting()
    {
        return `Name of the person is ${this.name} and his age is ${this.age} and gender is ${this.gender} and his interest is ${this.interests}`
    }

    farewell()
    {
        return `GoodBye ${this.name}`
    }

}

let abhishekPandey=new Person("Abhishek",21,"Male","Travelling");

let string1=abhishekPandey.greeting();
let string2=abhishekPandey.farewell();

console.log(string1);
console.log(string2);




// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

 class student extends Person{
     constructor(studies)
     {
     super()
       this.studies=studies
    
    }
    

    greeting()    {
        console.log(`Person is studying ${this.studies}`)
    }
 }

let user=new student("Computer Programming");
user.greeting();




// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person{
    constructor(subjectTaughts)
    {
        super()
        this.subjectTaughts=subjectTaughts
    }
     farewell()
     {
        console.log(`Subjects taughts are ${this.subjectTaughts}`)
     }
}


let user2=new Teacher(["Hindi", "English", "Math"])
user2.farewell();

