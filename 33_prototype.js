function Person(name) {
  this.name = name;
}

const p1 = new Person("이메론");
const p2 = new Person("반하나");

console.log(p1.name);
console.log(p2.name);

Person.prototype.sayHello = function () {
  console.log(`안녕하세요. 저는 ${this.name}입니다.`);
};
//11~13줄 전에 sayHello를 부르면 에러
p1.sayHello();
p2.sayHello();
