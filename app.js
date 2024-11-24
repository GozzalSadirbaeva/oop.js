// task 2

let start = document.querySelector(".start");
let gas = document.querySelector(".gas");
let stop = document.querySelector(".stop");
let move = document.querySelector(".move");
let speedText = document.querySelector(".speed-text");
let consumptionText = document.querySelector(".consumption-text");

class Car {
  constructor(speed, consumption) {
    this.speed = speed;
    this.consumption = consumption;
  }
  start() {
    console.log("Start");
    // consumptionText.textContent = this.consumption + 10;
    this.consumption = this.consumption + 10;
    console.log(this.consumption);
  }

  move() {
    this.consumption = this.consumption + 10;
    console.log("move");
  }
  gas() {
    this.speed = this.speed + 10;
    this.consumption = this.consumption + 10;
    console.log("gas");
  }
  stop() {
    this.speed = 0;
    console.log(this.consumption);
    console.log("stop");
  }
  getConsumption() {
    // this.consumption = this.consumption + 10;
    return this.consumption;
  }
  getSpeed() {
    return this.speed;
  }
}

let car = new Car(0, 0);
function first() {
  start.addEventListener("click", () => {
    car.start();
    consumptionText.textContent = car.getConsumption();
    start.disabled = true;
    move.disabled = false;
    gas.disabled = false;
    stop.disabled = false;
  });
}
first();

function second() {
  move.addEventListener("click", () => {
    car.move();
    consumptionText.textContent = car.getConsumption();
  });

  gas.addEventListener("click", () => {
    car.gas();
    consumptionText.textContent = car.getConsumption();
    speedText.textContent = car.getSpeed();
  });

  stop.addEventListener("click", () => {
    car.stop();
    consumptionText.textContent = car.getConsumption();
    speedText.textContent = car.getSpeed();
    start.disabled = true;
    move.disabled = false;
    gas.disabled = false;
    stop.disabled = false;
  });
}
second();
