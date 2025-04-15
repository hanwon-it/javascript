const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 한줄로 주어지는 수열을 줄 단위의 수열로 나눔
/*
    const input = fs.readFileSync("input.txt").toString().split(" ").map(Number); //테스트용
*/
const T = parseInt(input[0], 10); // 배열 0번째 자리를 10진수로 변환
const testcase = input.slice(1).map(Number); // 배열 2번째 (0이 시작으로 치면 1번째) 자리부터 새로운 배열로 받아드림

// 출력만 같으면 정답 아닌가
function countWays(n) {
  if (n === 0) {
    //값이 0이 되면 경우의 수로 포함
    return 1;
  }
  if (n < 0) {
    // 음수가 주어지는 것을 방지하기 위한 장치
    return 0;
  }
  return countWays(n - 1) + countWays(n - 2) + countWays(n - 3); // 주어지는 값을 1 2 3 으로 조합할수 있는 경우의 수 생성
}

testcase.forEach((n, index) => {
  //testcase 배열을 순회하며 작업수행 n -> 현재 값 index -> 배열의 위치
  if (n > 0 && n < 11) {
    // 주어지는 수는 0에서 10 사이의 수로 제한
    console.log(countWays(n)); // 수집된 경우의 수를 합산하여 도출
  }
});
