class Car {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speed() {
    console.log(`${this.name} is car`);
  }
}

class Kia extends Car {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  speed() {
    console.log(`${this.name} is the fasten car in this year`);
  }
}

class Bwd extends Car {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  speed() {
    console.log(`${this.name} is the beautiful car in this year`);
  }
}

class Tesla extends Car {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  speed() {
    console.log(`${this.name} is the most expensive car in this year`);
  }
}

let firstCar = new Kia("Buba", 3, "black");
console.log(firstCar);
firstCar.speed();

let secondCar = new Bwd("Maxi", 4, "gray");
console.log(secondCar);
secondCar.speed();

let thirdCar = new Tesla("Sunny", 1, "red");
console.log(thirdCar);
thirdCar.speed();
