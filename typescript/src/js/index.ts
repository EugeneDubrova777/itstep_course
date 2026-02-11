import '../scss/index.scss';

let n: number = 5;
let city: string = 'Minsk';
let result: boolean = true;

let some: any = 12;

let color: 'red' | 'green';


type Person = {
  name: string,
  age: number,
  isStudent: boolean
}

let student: Person = {
  name: 'Jack',
  age: 57,
  isStudent: true
}

let numbers: number[] = [1, 4, 6];
let strings: Array<string> = ['q', 'r', 'h'];



console.log(student);

function showInConsole(str: string): void {
  console.log(str);
}

function summ(a: number, b: number): number {
  return a + b;
}

console.log(summ(2, 6));

function createPerson(name: string, age: number, isStudent: boolean): Person {
  return {
    name: name,
    age: age,
    isStudent: isStudent
  }
}



