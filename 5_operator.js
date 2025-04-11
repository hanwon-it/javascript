let num = 10;
num++;
console.log(num); //11
++num;
console.log(num); //12
let result = 0;
result = ++num;
console.log(result); //13
result = num++;
console.log(result); //13
console.log("--------------");

let a = 23; // 1 0 1 1 1
let b = 14; // 0 1 1 1 0

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);
console.log(a << 1);
console.log(a >> 1);
//1.1 + 0.1 == 1.2가 왜 false가 나오는지가 과제
