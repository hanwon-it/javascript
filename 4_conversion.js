console.log(10 + 20);
console.log(10 + "20");

console.log("3" * "5");
//문자형으로 선언이 되어 있지만 자바스크립트가
//자동으로 형변환을 해서 결과가 15가 나온다

console.log(1 - "일");
//NaN - Not a number 숫자가 아님을 의미하는 특이한 값이다
// !== -> 같지 않다

const num1 = "10";
const num2 = "3.5";
const num3 = 5;
//const를 더 많이 쓰는 이유
//프로그램 하다보면 선언한 변수가 수정될 일이 거의 없다

console.log(`현재 num1의 타입: ${typeof num1}`);
console.log("현재 num1의 타입: ", typeof num1);
//둘다 같고 2번째 줄의
//console.log("현재 num1의 타입: "(typeof(num1));이 맞는 표현

console.log(`Number(num1)의 타입: ${typeof Number(num1)}`);
// Number(num1) -> 컨버젼 되어서 문자형이 숫자형으로 바뀜
console.log(`현재 num3의 타입: ${typeof num3}`);
console.log(`String(num3)의 타입: ${typeof String(num3)}`);
console.log(`Boolean(num1)의 타입: ${typeof Boolean(num1)},${Boolean(num1)}`);
//boolean - 참 거짓을 판단함
console.log(`Object(num1)의 타입: ${typeof Object(num1)}, ${Object(num1)}`);
console.log(
  `parseInt(num2)의 타입: ${typeof parseInt(num2)}, ${parseInt(num2)}`
); //parseInt - 숫자형으로 바꾸면서 정수형으로 바꿔서 3.5에서 3이 됨
console.log(
  `parseFloat(num1)의 타입: ${typeof parseFloat(num2)}, ${parseFloat(num2)}`
);
