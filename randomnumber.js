//sort() : 배열의 요소를 오름차순
// const arr = ["apple", "banana", "Apple", "orange", "melon"];
// arr.sort();
// console.log(arr);

const randomnumber = [];
while (randomnumber.length < 6) {
  const randex = Math.floor(Math.random() * 45) + 1;
  if (!randomnumber.includes(randex)) {
    randomnumber.push(randex);
  }
}
randomnumber.sort((a, b) => a - b);
console.log(randomnumber);
