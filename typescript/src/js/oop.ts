import '../scss/index.scss';

class User {
  name: string;
  protected _age: number;
  readonly gender: string;

  constructor(name: string, gender: string, age?: number) {
    this.name = name;
    this._age = age;
    this.gender = gender;
  }

  showInfo(): void {
    console.log(`My name is ${this.name}, I'm ${this._age} years old.`);
  }

  toString(): string {
    return `${this.name}: ${this._age}`;
  }

  public set age(n: number) {
    this._age = n;    
  }

  public get age(): number {
    return this._age;
  }

}

class Employee extends User {
  company: string;
  rank: string;

  static retirementAge: number = 65;
  static calcYears(age: number): number {
    return Employee.retirementAge - age;
  }

  constructor(name: string, gender: string, _age?: number) {
    super(name, gender, _age);
  }

  toString(): string {
    console.log(super.toString());
    return `${this.name}: ${this._age}: ${this.company} - ${this.rank}`;
  }
}


let user : User = new User('Johnny', 'female');
let worker : Employee = new Employee('Joe', 'female', 23);

// user.name = "Johnny";
user.age = 70;
user.showInfo();

worker.company = 'coca-cola';
worker.rank = 'workman';

console.log(user.toString());
console.log(worker.toString());

abstract class Figure {
  abstract getArea(): number;
}

class Rectangle extends Figure {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;    
  }

  getArea() : number {
    return this.width * this.height;
  }
}

let rect: Rectangle = new Rectangle(100, 50);
console.log(rect.getArea());

console.log(Employee.calcYears(58));


interface IUser {
  id: number;
  name: string;
}

let employee: IUser = {     
  id: 1, 
  name: "Tom"
}

console.log(`id: ${employee.id}, name: ${employee.name}`);

interface ICar {
  id: number;
  name: string;
  showInfo(): void;
}

class Sedan implements ICar {
  id: number;
  name: string;
  weight: number;

  constructor(weight: number, id: number, name: string) {
    this.weight = weight;
    this.id = id;
    this.name = name;
  }

  showInfo(): void {
    console.log(`${this.name}, ${this.id}, ${this.weight}kg`)
  };
}

let car1 = new Sedan(200, 1, "Ford");

function showCarInfo(car: ICar) {
  car.showInfo();
}

showCarInfo(car1);




let tom: User = new Employee("Tom Soyer", "female");
let employeeTom: Employee = <Employee>tom;
employeeTom.company = "amazon";

