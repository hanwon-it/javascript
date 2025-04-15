function Pet(name, age, jong, hunger, energy) {
  //   this.color = color;
  this.name = name;
  this.hunger = hunger;
  this.age = parseFloat(age);
  this.jong = jong;
  this.energy = energy;

  this.eat = function () {
    this.hunger -= 30;
    this.energy += 10;
    this.hunger = Math.max(0, this.hunger);
    this.energy = Math.min(100, this.energy);
    console.log(`${this.name}가 밥을 먹었습니다`);
    this.showStats();
  };

  this.play = function () {
    this.hunger += 20;
    this.energy -= 20;
    this.age += 0.1;
    this.hunger = Math.min(100, this.hunger);
    this.energy = Math.max(0, this.energy);
    console.log(`${this.name}가 밖에서 놀고왔습니다`);
    this.showStats();
  };

  this.sleep = function () {
    this.hunger += 10;
    this.energy += 40;
    this.hunger = Math.min(100, this.hunger);
    this.energy = Math.min(100, this.energy);
    console.log(`${this.name}가 집에서 잠을 잤습니다`);
    this.showStats();
  };

  this.showStats = function () {
    console.log(
      `이름: ${this.name}, 나이: ${this.age.toFixed(1)}, 종: ${
        this.jong
      }, 배고픔: ${this.hunger}, 에너지: ${this.energy}`
    );
    this.speak = function () {
      if (this.jong === "강아지") {
        console.log("멍멍");
      } else if (this.jong === "고양이") {
        console.log("야옹");
      } else {
        console.log("찍찍");
      }
    };
  };
}

const names = ["뽀미", "루시", "초코", "제리"];
const ages = ["1.0", "1.5", "1.4", "2.0"];
const jongs = ["강아지", "고양이", "햄스터"];
const hunger = 50;
const energy = 50;

const pets = [];
function allpets(i) {
  for (let i = 0; i < 3; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomJong = jongs[Math.floor(Math.random() * jongs.length)];
    const randomAge = ages[Math.floor(Math.random() * ages.length)];

    const pet = new Pet(randomName, randomAge, randomJong, hunger, energy);
    pets.push(pet);

    console.log(`생성된 ${i + 1}번째 동물`);
    pet.showStats();
    pet.speak();
  }
}

function simulationDay(p) {
  console.log(`----${p}일차----`);
  pets.forEach((pet) => {
    const ac = ["eat", "play", "sleep"];
    const randomac = ac[Math.floor(Math.random() * ac.length)];

    if (randomac === "eat") {
      pet.eat();
    } else if (randomac === "play") {
      pet.play();
    } else if (randomac === "sleep") {
      pet.sleep();
    }
  });
}
allpets();
for (let p = 1; p <= 5; p++) {
  simulationDay(p);
}
