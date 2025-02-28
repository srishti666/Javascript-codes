
class Person {
    constructor(name){
        this.name = name ; 
    }
    walk(){
        console.log("Walk");
    }
}

const person = new Person('Srishti');
person.walk();


//Inheritance

class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("Srishti", "BTech");

