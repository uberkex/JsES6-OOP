// Superclass, BaseClass
class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log(`İsim = ${this.name}\nYaş = ${this.age}`);
    }
}


// DerivedClass, Subclass, ChildClass
class Employee extends Person {

    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.salary = salary;
    }


    // showInfos Override
    showInfos(){
        console.log(`İsim = ${this.name}\nYaş = ${this.age}\nMaaş = ${this.salary}`);
    }

    toString(){
        console.log("Employee");
    }

    raiseSalary(amount){
        this.salary = this.salary + amount;
        // this.salary += amount;
    }


}

const emp = new Employee("Berke",24,5000);
console.log(emp);
emp.showInfos();

// override işleminden önce yap
// console.log(emp.toString()); // --> [object Object]


// override işleminden sonra yap
emp.toString();
// ---> Employee

// Maaşı arttıralım
emp.raiseSalary(1000);
emp.showInfos();
