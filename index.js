// task 1

class Student {
  constructor(name, age, degree, address, email, friend) {
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.address = address;
    this.email = email;
    this.friend = friend;
  }
  first() {
    console.log(`${this.name} is ${this.degree} student in University`);
  }
  second() {
    console.log(
      `${this.name} has lived in ${this.address} street for ${this.age} years`
    );
  }
  third() {
    console.log(`She checks this email ${this.email} every day`);
  }
  fourth() {
    console.log(`Her best friend is ${this.friend}`);
  }
  fifth() {
    console.log(`The student name is ${this.name}`);
  }
  sixth() {
    console.log(`She is ${this.age} years old`);
  }
  seventh() {
    console.log(`${this.friend} is also studeied in ${this.name}'s University`);
  }
  eight() {
    console.log(`${this.friend} is also ${this.age} years old`);
  }
  nine() {
    console.log(`${this.name} and ${this.friend} are grew up together`);
  }
  ten() {
    console.log(`I wish them to be frends forever`);
  }
}
let student = new Student(
  "Jane",
  21,
  "excellent",
  "Jhonsons",
  "jane@gmail.com",
  "Anna"
);
student.fifth();
student.sixth();
student.first();
student.second();
student.third();
student.fourth();
student.nine();
student.seventh();
student.eight();
student.ten();
