// Syntactic Sugar
// Sadece yazım olarak değişiyor - Babel çeviriyor

class Employee {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log(`Ad = ${this.name}\nYaş = ${this.age}\nMaaş = ${this.salary}`);
    }
}

const emp = new Employee("Berke Karataş",24,4500);
console.log(emp);
emp.showInfos();