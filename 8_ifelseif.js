// let age = 13;

// if (age >= 19) {
//   console.log("성인입니다");
// } else if (age >= 13) {
//   console.log("청소년입니다");
// } else if (age >= 6) {
//   console.log("어린이입니다");
// } else {
//   console.log("유아입니다");
// }

let kor = 100;
let eng = 76;
let math = 95;

let total = kor + eng + math;

let avg = total / 3;

// 평균을 기준으로 90점이상 A, 80점이상 b, 70점이상 c, 60점이상 d, 나머지는 f

/*
    총점: xx점
    평균: xx점
    학점: x
*/
console.log(`총점: ${total}`);
console.log(`평균: ${avg}`);
if (avg >= 90) {
  console.log("A 입니다");
} else if (avg >= 80) {
  console.log("B 입니다");
} else if (avg >= 70) {
  console.log("C 입니다");
} else if (avg >= 60) {
  console.log("D 입니다");
} else {
  console.log("F 입니다");
}
