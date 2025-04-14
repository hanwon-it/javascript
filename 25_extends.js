class Animal {
  speak() {
    console.log("동물이 소리를 냅니다");
  }
}

class Dog extends Animal {
  eat() {
    console.log("강아지가 밥을 먹습니다");
  }
  // 오버라이딩(Overriding)
  speak() {
    console.log("강아지가 소리를 냅니다");
  }
}

const animal = new Animal();
animal.speak();
//animal.eat(); // 자식 클래스의 메서드를 사용하지 못함

const dog = new Dog();
dog.speak();
dog.eat();
