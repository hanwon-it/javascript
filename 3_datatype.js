//기본형
let num = 20;
let str = "hello";
let isready = true;
let nothing = null;
let notdefined;
let bignumber = 123123123123123123;
let unique = Symbol("id"); // 내부적으로 각자 다른 값을 가짐

console.log("기본형 타입 출력");
console.log("num: ", num);
console.log("str: ", str);
console.log("isready: ", isready);
console.log("nothing: ", nothing);
console.log("notdefined: ", notdefined);
console.log("bignumber: ", bignumber);
console.log("unique: ", unique);

let obj1 = { name: "apple" };
console.log(obj1.name);
let obj2 = obj1;
obj2.name = "banana";
console.log(obj2.name);
console.log(obj1.name);

/*
    참조형(reference Type)
*/
let person = { name: "apple", age: 20 };
let numbers = [1, 2, 3, 4, 5];
let greet = function () {
  return "안녕하세요!";
};
let now = new Date();

console.log("참조형 타입 출력");
console.log("person", person);
console.log("numbers", numbers);
console.log("greet():", greet());
console.log("now: ", now);

let num1 = 10;
let num2 = 5;

console.log(num1, "*", num2, "=", num1 * num2);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
