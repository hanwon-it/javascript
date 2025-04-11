/*
    Math.random() : 0이상 1미만의 임의의 소수를 생성하는 함수
*/
console.log(Math.random()); //값은 매번 달라짐

// 0 ~ 9까지 정수 중 하나를 랜덤하게 뽑기
//floor = 소수점 버림
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//음식 자동 판매기
const menu = ["치킨", "피자", "햄버거", "김밥"];
const randomIndex = Math.floor(Math.random() * menu.length); // 0 ~ 3
const randomMenu = menu[randomIndex];
console.log("내일의 점심은: ", randomMenu);

// 랜덤으로 가위바위보 게임 만들기
// 사용자가 변수에 "가위" "바위" "보" 중 하나를 입력하면
// 컴퓨터는 Math.random()을 이용해서 하나를 랜덤 선택
// 둘을 비교해서 승/패/무 결과를 출력

// 로또번호 생성기
// 1 ~ 45까지의 숫자중 중복없이 6개를 추출
// 작은 수를 앞으로 정렬(오름차순)
