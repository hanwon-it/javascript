const now = new Date();
console.log("현재: ", now.toString()); // 시간은 내 컴퓨터 기준

console.log("년: ", now.getFullYear());
console.log("월: ", now.getMonth() + 1);
console.log("일: ", now.getDate());

const birthday = new Date(2020, 4, 15);
console.log("생일", birthday.toDateString());

const nowTime = now.getTime();
// console.log(nowTime);
const birthTime = birthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24));
console.log(`태어난지 ${diffDays}일 지남`);
