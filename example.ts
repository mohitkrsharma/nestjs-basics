/*1. Types & Interfaces*/

let username: string = 'Mohit Kumar Sharma';
let age: number = 33;
let isActive: boolean = true;

interface User {
    name: string;
    age: number;
}

const user: User = {
    name:'Mohit Kumar Sharma',
    age: 33,
}

console.log(user);

/*2. Functions with Type Safety*/

function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet('Mohit Kumar Sharma'));

/*3. Classes & Objects*/

class Person {
    constructor(public name: string, public age: number) {
    }

    greet(){
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}
const person = new Person('Mohit',33);
console.log(person.greet());

/*4. Generics*/

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement<number>([1,2,3,4]));
console.log(getFirstElement<string>(["a", "b", "c","d"]));
