//sort() : 배열의 요소를 오름차순
// const arr = ["apple", "banana", "Apple", "orange", "melon"];
// arr.sort();
// console.log(arr);

//랜덤 발생한 숫자들을 넣을 빈 배열 생성
const randomnumber = [];
// 랜덤 숫자 6개 생성을 위해 배열이 6개가 되도록 반복
while (randomnumber.length < 6) {
  // 1 ~ 45 사이에 숫자가 발생하도록 설정
  const randex = Math.floor(Math.random() * 45) + 1;
  // 숫자 중복 방지
  if (!randomnumber.includes(randex)) {
    randomnumber.push(randex);
  }
}
// 숫자 기반 오름차순 정렬-> .sort((a, b) => a - b);
randomnumber.sort((a, b) => a - b);
console.log(randomnumber);
