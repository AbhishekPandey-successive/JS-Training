// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape{
    constructor(width,height)
    {
        this.width=width
        this.height=height
    }

    getArea()
    {
      console.log(`Area of the shape is height*width :${this.height* this.width}`)
    }
}


class Rectangle extends Shape{
    constructor(width,height)
    {
        super(width,height)
    }


}

class Triangle extends Shape{
    constructor(width,height)
    {
        super(width,height)
    }

    triangleArea()
    {
        console.log(`Area of traingle is ${0.5*this.width*this.height}`)
    }


}


let a=new Shape(2,4);
a.getArea();

let b=new Rectangle(4,5);
b.getArea();


let c=new Triangle(2,3)
c.triangleArea();

