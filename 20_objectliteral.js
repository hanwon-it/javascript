const person = {
  name: "김사과",
  age: 20,
  greet: function () {
    console.log(`안녕하세요. 저는 ${this.name}입니다`); //${this.name} -> 자기 객체
    //return `안녕하세요, 저는 ${this.name}입니다`;
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());
//여기까지만 작성하고 실행하면 undefined 출력됨
//리턴값이 없어서 출력되는것
//해결법
//greet: function () {
//return `안녕하세요, 저는 ${this.name}입니다`;
//},

//person.greet();
