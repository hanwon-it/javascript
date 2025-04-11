// for (let i = 1; i <= 5; i++) {
//   console.log(`현재 숫자: ${i}`);
// }

// for (let i = 1; i <= 10; i = i + 2) {
//   console.log(`현재 숫자: ${i}`);
// }

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
//   console.log("");
// }

let i = 2;
let j = 1;

while (i <= 9) {
  j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  console.log("");
  i++;
}
