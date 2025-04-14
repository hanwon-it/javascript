function Person(name, age) {
  //객체를 만들때는 맨앞을 대문자로 쓰는게 관례
  this.name = name;
  this.age = 25;
  this.greet = function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다`); //${this.name} -> p1, p2가 같이 쓰기에 재활용하기 위해서
  };
}

const p1 = new Person("이메론", 30);
console.log(p1.name);
console.log(p1.age);
p1.greet();

const p2 = new Person("배애리", 27);
p2.greet();
